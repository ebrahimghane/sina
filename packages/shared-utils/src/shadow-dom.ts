/**
 * Creates a Shadow Root for the given host element
 * @param host - The host element to attach the shadow root to
 * @param mode - Shadow DOM mode ('open' or 'closed')
 * @returns The created Shadow Root
 */
export function createShadowRoot(
  host: HTMLElement,
  mode: ShadowRootMode = 'open'
): ShadowRoot {
  if (host.shadowRoot) {
    return host.shadowRoot;
  }
  return host.attachShadow({ mode });
}

/**
 * Injects CSS styles as a string into the Shadow Root
 * @param shadowRoot - The Shadow Root to inject styles into
 * @param cssText - CSS text as a string
 */
export function injectStyles(shadowRoot: ShadowRoot, cssText: string): void {
  // Check if style element already exists
  let styleElement = shadowRoot.querySelector('style');
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    shadowRoot.appendChild(styleElement);
  }
  
  styleElement.textContent = cssText;
}

