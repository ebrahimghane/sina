import type { SearchiaResponse } from './types';

const API_ENDPOINT = 'https://apigw.paziresh24.com/v1/searchia-api/v2/qs/index/slim_clinic_query_su';

/**
 * Fetches query suggestions from Searchia API
 * @param query - The search query text
 * @param apiKey - The API key for authentication
 * @returns Promise with the API response or null on error
 */
export async function fetchSuggestions(
  query: string,
  apiKey: string
): Promise<SearchiaResponse | null> {
  // Allow empty query for focus events
  const trimmedQuery = query ? query.trim() : '';

  try {
    const url = new URL(API_ENDPOINT);
    url.searchParams.set('query', trimmedQuery);

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        apikey: apiKey,
      },
    });

    if (!response.ok) {
      // Silently fail - don't crash the widget
      console.warn(`Searchia API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    
    // Validate response structure
    if (data && data.entity && Array.isArray(data.entity.topQuerySuggestions)) {
      return data as SearchiaResponse;
    }
    
    console.warn('Invalid API response structure:', data);
    return null;
  } catch (error) {
    // Silently fail - don't crash the widget
    console.warn('Failed to fetch suggestions:', error);
    return null;
  }
}

