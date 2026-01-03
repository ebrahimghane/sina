/**
 * Type definitions for Searchia API responses
 */

export interface SearchiaEntity {
  topQuerySuggestions: string[];
  topQuerySuggestionsIncludeDocCount?: Array<{
    query: string;
    docCount: number;
  }>;
  topQuerySuggestionsIncludeCategory?: Array<{
    query: string;
    category?: unknown;
    docCount?: number;
  }>;
  searchTime?: number;
  [key: string]: unknown;
}

export interface SearchiaResponse {
  statusType: string;
  details?: string;
  entity: SearchiaEntity;
  path?: string;
  [key: string]: unknown;
}

