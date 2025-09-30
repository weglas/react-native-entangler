# react-native-entangler

> **Fabric-ready Quantum Bridge Optimization™ for React Native.** 

![build: passing](https://img.shields.io/badge/build-passing-brightgreen)
![fabric: compatible](https://img.shields.io/badge/fabric-compatible-blue)
![hermes: coherent](https://img.shields.io/badge/hermes-coherent-purple)
![license: MIT](https://img.shields.io/badge/license-MIT-informational)

## Why
Because every mobile team deserves a dashboard that looks extremely serious during demos.

## Install
```bash
npm i react-native-entangler
# or
yarn add react-native-entangler
```

## Usage
```
import { useEntanglement } from 'react-native-entangler';

export default function StatusChip() {
  const { metrics } = useEntanglement({ strategy: 'Hermes-Schrödinger' });
  return <Text>Imaginary FPS: {metrics.fpsImaginary}</Text>;
}
```

## Component
```
import { EntanglementView } from 'react-native-entangler';

export default function Screen() {
  return <EntanglementView intervalMs={700} />;
}
```

## Metro (optional vibes)
```
// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');
const { metroEnhancer } = require('react-native-entangler');

module.exports = metroEnhancer(getDefaultConfig(__dirname));
```

## API surface

```
useEntanglement(options?) → { metrics, status, timestampISO }

<EntanglementView {...options} />

metroEnhancer(config) → config (returns input unchanged)
```