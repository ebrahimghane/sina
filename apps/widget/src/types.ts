/**
 * Widget configuration and state types
 */

export interface WidgetConfig {
  apiKey: string;
  containerId?: string;
  placeholder?: string;
  city?: string;
  specialty?: string;
  [key: string]: unknown;
}

export interface WidgetState {
  query: string;
  suggestions: string[];
  isLoading: boolean;
  isOpen: boolean;
  error: Error | null;
}

