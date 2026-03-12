// ══════════════════════════════════════════════
//  src/components/ui/SplashScreen.tsx — Splash inteligente
// ══════════════════════════════════════════════

"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const MIN_DISPLAY_MS = 1200;
const MAX_DISPLAY_MS = 2500;
const FADE_OUT_MS = 350;

export default function SplashScreen({
  onFinished,
}: {
  onFinished: () => void;
}) {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");
  const appReady = useRef(false);
  const minElapsed = useRef(false);
  const hasTriggered = useRef(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fadeDuration = prefersReducedMotion ? 0 : FADE_OUT_MS;

  const startFadeOut = useCallback(() => {
    if (hasTriggered.current) return;
    hasTriggered.current = true;

    setPhase("fading");
    setTimeout(() => {
      setPhase("done");
      onFinished();
    }, fadeDuration);
  }, [fadeDuration, onFinished]);

  // Marca la app como lista cuando el documento termina de cargar
  useEffect(() => {
    const markReady = () => {
      appReady.current = true;
      if (minElapsed.current) startFadeOut();
    };

    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady);
      return () => window.removeEventListener("load", markReady);
    }
  }, [startFadeOut]);

  // Temporizador mínimo
  useEffect(() => {
    const timer = setTimeout(() => {
      minElapsed.current = true;
      if (appReady.current) startFadeOut();
    }, MIN_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [startFadeOut]);

  // Temporizador máximo (forzar salida)
  useEffect(() => {
    const timer = setTimeout(() => {
      startFadeOut();
    }, MAX_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [startFadeOut]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Cargando aplicación"
      className="splash-overlay"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: fadeDuration > 0 ? `opacity ${fadeDuration}ms ease-out` : "none",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/branding/logo-splash.svg"
        alt="EDUNEX"
        className="splash-logo"
        draggable={false}
      />
    </div>
  );
}
