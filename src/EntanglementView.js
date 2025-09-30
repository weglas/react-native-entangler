import React from 'react';
import { View, Text, Platform } from 'react-native';
import { useEntanglement } from './hook.js';

/**
 * A tiny widget that screams "enterprise dashboard".
 */
export function EntanglementView(props) {
  const { metrics } = useEntanglement(props);
  const line = (k, v) => (
    <Text key={k} style={{ fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }), marginVertical: 2 }}>
      {k.padEnd(20, ' ')}: {String(v).padStart(6, ' ')}
    </Text>
  );

  const rows = {
    'Fabric Stability': metrics.fabricStability + '%',
    'Hermes Coherence': metrics.hermesCoherence,
    'Bridge Compression': metrics.bridgeCompression + 'x',
    'Bundle Warmth': metrics.bundleWarmthC + ' °C',
    'Imaginary FPS': metrics.fpsImaginary,
    'Strategy': metrics.strategy
  };

  return (
    <View
      accessibilityRole="summary"
      style={{
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e5e5e5'
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>
        React Native Entanglement™
      </Text>
      {Object.entries(rows).map(([k, v]) => line(k, v))}
      <Text style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
        Now optimized.
      </Text>
    </View>
  );
}
