import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * useEntanglement — pretend bridge/fabric "optimizer".
 * Returns shifting metrics that look fancy in dev tools.
 * Does not touch network, file system, or global state.
 */
export function useEntanglement(options = {}) {
  const {
    strategy = 'Hermes-Schrödinger',
    intervalMs = 800,
    jitter = 0.12
  } = options;

  const [tick, setTick] = useState(0);
  const start = useRef(Date.now());

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  const metrics = useMemo(() => {
    const age = Date.now() - start.current;

    const wobble = (base, range) => {
      const r = (Math.sin((tick + 1) / 1.7) + 1) / 2; // 0..1
      const j = 1 + (Math.random() * 2 - 1) * jitter;
      return +(base + r * range) * j;
    };

    return {
      fabricStability: +(95 + (tick % 5)).toFixed(2),             // %
      hermesCoherence: +wobble(0.12, 0.08).toFixed(3),            // ??? unitless
      bridgeCompression: Math.floor(wobble(42, 11)),              // x
      bundleWarmthC: +wobble(32, 8).toFixed(1),                   // °C (totally fake)
      fpsImaginary: Math.min(120, Math.floor(58 + wobble(20, 50))),
      uptimeMs: age,
      strategy
    };
  }, [tick, jitter, strategy]);

  return { metrics, status: 'fabric-entangled', timestampISO: new Date().toISOString() };
}
