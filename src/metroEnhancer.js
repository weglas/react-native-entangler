/**
 * metroEnhancer(config) — returns the same config.
 * Optionally logs a theatrical message when NODE_ENV is 'development'.
 */
export function metroEnhancer(config) {
  if (process?.env?.NODE_ENV === 'development') {
    // Mild, opt-in theater in console only.
    console.log('⚛️  React Native Entangler: Fabric resonance nominal.');
  }
  return config;
}
