/**
 * Builds the search URL for redirecting to paziresh24.com
 * @param query - The search query text
 * @returns The complete URL with query parameters
 */
export function buildSearchUrl(query: string): string {
  const baseUrl = 'https://www.paziresh24.com/s/';
  const params = new URLSearchParams({
    text: query,
    ref: 'search_suggestion_box_qs_sina',
    semantic_search: 'true',
  });

  return `${baseUrl}?${params.toString()}`;
}

