import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { fetchSuggestions } from '@sina/api';
import { debounce, buildSearchUrl } from '@sina/shared-utils';
import { SearchBox } from './components/SearchBox';
import { Suggestions } from './components/Suggestions';
import type { WidgetConfig, WidgetState } from './types';
// Import CSS as raw string
import widgetStyles from './styles/widget.css?raw';

export interface WidgetProps {
  config: WidgetConfig;
}

export const Widget: React.FC<WidgetProps> = ({ config }) => {
  const [state, setState] = useState<WidgetState>({
    query: '',
    suggestions: [],
    isLoading: false,
    isOpen: false,
    error: null,
  });

  const debouncedFetchRef = useRef<ReturnType<typeof debounce> | null>(null);

  // Initialize debounced fetch function
  useEffect(() => {
    debouncedFetchRef.current = debounce(async (query: string) => {
      if (!query || query.trim().length === 0) {
        setState((prev) => ({
          ...prev,
          suggestions: [],
          isLoading: false,
        }));
        return;
      }

      setState((prev) => ({ ...prev, isLoading: true }));

      const response = await fetchSuggestions(query, config.apiKey);

      if (response && response.entity && response.entity.topQuerySuggestions) {
        // topQuerySuggestions is already an array of strings
        const suggestions = response.entity.topQuerySuggestions;
        setState((prev) => ({
          ...prev,
          suggestions,
          isLoading: false,
          error: null,
        }));
      } else {
        // If no suggestions from API, use the current query as a suggestion
        const fallbackSuggestion = query && query.trim().length > 0 ? [query.trim()] : [];
        setState((prev) => ({
          ...prev,
          suggestions: fallbackSuggestion,
          isLoading: false,
          error: null,
        }));
      }
    }, 300);
  }, [config.apiKey]);

  const handleQueryChange = useCallback((value: string) => {
    setState((prev) => ({
      ...prev,
      query: value,
      isOpen: true,
    }));

    if (debouncedFetchRef.current) {
      debouncedFetchRef.current(value);
    }
  }, []);

  const handleFocus = useCallback(() => {
    setState((prev) => {
      // Fetch suggestions when clicking on search box
      const currentQuery = prev.query || '';
      if (debouncedFetchRef.current) {
        // Call immediately without debounce for focus event
        debouncedFetchRef.current(currentQuery);
      }
      return {
        ...prev,
        isOpen: prev.suggestions.length > 0,
      };
    });
  }, []);

  const handleBlur = useCallback(() => {
    // Delay to allow click events on suggestions
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isOpen: false,
      }));
    }, 200);
  }, []);

  const handleSelect = useCallback((query: string) => {
    setState((prev) => ({
      ...prev,
      query,
      isOpen: false,
    }));
  }, []);

  const handleEnter = useCallback(() => {
    setState((prev) => {
      const { query, suggestions } = prev;
      
      // If there are suggestions, select the first one
      if (suggestions.length > 0) {
        const firstSuggestion = suggestions[0];
        const url = buildSearchUrl(firstSuggestion);
        window.location.href = url;
        return {
          ...prev,
          query: firstSuggestion,
          isOpen: false,
        };
      } else if (query && query.trim().length > 0) {
        // If no suggestions but there's a query, search with the query
        const url = buildSearchUrl(query.trim());
        window.location.href = url;
        return {
          ...prev,
          isOpen: false,
        };
      }
      
      return prev;
    });
  }, []);

  return (
    <div className="sina-widget">
      <SearchBox
        value={state.query}
        onChange={handleQueryChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onEnter={handleEnter}
        placeholder={config.placeholder}
      />
      <Suggestions
        suggestions={state.suggestions}
        query={state.query}
        isVisible={state.isOpen}
        onSelect={handleSelect}
      />
    </div>
  );
};

/**
 * Renders the widget into a Shadow DOM
 */
export function renderWidget(container: HTMLElement, config: WidgetConfig): void {
  // Get or create shadow root
  let shadowRoot = container.shadowRoot;
  if (!shadowRoot) {
    shadowRoot = container.attachShadow({ mode: 'open' });
  } else {
    // Clear existing content if re-rendering
    shadowRoot.innerHTML = '';
  }

  // Inject styles
  const styleElement = document.createElement('style');
  styleElement.textContent = widgetStyles;
  shadowRoot.appendChild(styleElement);

  // Create root container for React
  const rootContainer = document.createElement('div');
  rootContainer.id = 'sina-widget-root';
  shadowRoot.appendChild(rootContainer);

  // Render React app
  const root: Root = createRoot(rootContainer);
  root.render(<Widget config={config} />);
}

