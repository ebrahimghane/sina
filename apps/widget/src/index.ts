import { renderWidget } from './widget';
import type { WidgetConfig } from './types';

/**
 * Global window interface for SINA widget
 */
declare global {
  interface Window {
    SinaWidget?: {
      q: Array<[string, ...unknown[]]>;
      (command: string, ...args: unknown[]): void;
    };
  }
}

/**
 * Default configuration
 */
const DEFAULT_CONFIG: Partial<WidgetConfig> = {
  containerId: 'sina-search-root',
  placeholder: 'از پذیرش24 بپرسید...',
};

/**
 * Initialize the widget
 */
function init(config: WidgetConfig): void {
  const containerId = config.containerId || DEFAULT_CONFIG.containerId || 'sina-search-root';
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`SINA Widget: Container element with id "${containerId}" not found`);
    return;
  }

  // Merge with defaults
  const finalConfig: WidgetConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  // Validate required config
  if (!finalConfig.apiKey) {
    console.error('SINA Widget: apiKey is required');
    return;
  }

  // Read data attributes from container if present
  const dataCity = container.getAttribute('data-city');
  const dataSpecialty = container.getAttribute('data-specialty');
  const dataPlaceholder = container.getAttribute('data-placeholder');

  if (dataCity) {
    finalConfig.city = dataCity;
  }
  if (dataSpecialty) {
    finalConfig.specialty = dataSpecialty;
  }
  if (dataPlaceholder) {
    finalConfig.placeholder = dataPlaceholder;
  }

  // Render widget
  renderWidget(container, finalConfig);
}

/**
 * SINA Widget loader function
 * Supports queue pattern for async loading
 */
function sinaLoader(command: string, ...args: unknown[]): void {
  if (command === 'init') {
    const config = args[0] as WidgetConfig;
    if (config) {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => init(config));
      } else {
        init(config);
      }
    }
  }
}

/**
 * Initialize the loader queue
 * This handles both immediate calls and queued calls from the loader snippet
 */
if (typeof window !== 'undefined') {
  // Check if queue already exists (from loader snippet)
  const existingQueue = (window.SinaWidget as { q?: Array<[string, ...unknown[]]> })?.q || [];
  
  // Create the main function
  const sinaFunction = sinaLoader as Window['SinaWidget'];
  (sinaFunction as { q: Array<[string, ...unknown[]]> }).q = existingQueue;
  
  // Process any queued commands
  if (existingQueue.length > 0) {
    existingQueue.forEach(([command, ...args]) => {
      sinaLoader(command, ...args);
    });
    existingQueue.length = 0; // Clear queue after processing
  }
  
  // Set the main function and also expose init directly
  window.SinaWidget = sinaFunction;
  (window.SinaWidget as { init: typeof init }).init = init;
}

// Export for UMD
export { init, renderWidget };
export type { WidgetConfig } from './types';

