import React from 'react';
import { SuggestionItem } from '@sina/ui';
import { buildSearchUrl } from '@sina/shared-utils';

export interface SuggestionsProps {
  suggestions: string[];
  query: string;
  isVisible: boolean;
  onSelect: (query: string) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  query,
  isVisible,
  onSelect,
}) => {
  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  const handleSelect = (suggestion: string) => {
    const url = buildSearchUrl(suggestion);
    window.location.href = url;
    onSelect(suggestion);
  };

  const SearchIcon = () => (
    <svg
      className="sina-suggestion-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="sina-suggestions-container">
      <ul className="sina-suggestions-list" role="listbox">
        {suggestions.map((suggestion, index) => (
          <li
            key={`${suggestion}-${index}`}
            className="sina-suggestion-item-wrapper"
            onClick={() => handleSelect(suggestion)}
          >
            <SearchIcon />
            <SuggestionItem
              text={suggestion}
              onClick={() => handleSelect(suggestion)}
              highlight={query}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

