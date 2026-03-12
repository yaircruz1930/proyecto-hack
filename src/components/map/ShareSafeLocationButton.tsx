"use client";

import { useMemo, useState } from "react";
import { Share2, Loader2 } from "lucide-react";
import { useMapState } from "@/contexts/MapContext";

type ShareStatus = "shared" | "copied" | "location-error" | "share-error";

function toMapsLink(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

export default function ShareSafeLocationButton() {
  const { userLocation, locateUser, isLocating } = useMapState();
  const [status, setStatus] = useState<ShareStatus | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  const statusLabel = useMemo(() => {
    if (status === "shared") return "Compartido";
    if (status === "copied") return "Enlace copiado";
    if (status === "location-error") return "No se pudo obtener ubicación";
    if (status === "share-error") return "No se pudo compartir";
    return null;
  }, [status]);

  const setTransientStatus = (next: ShareStatus) => {
    setStatus(next);
    window.setTimeout(() => setStatus(null), 2200);
  };

  const handleShare = async () => {
    setIsSharing(true);

    try {
      let location = userLocation;

      if (!location) {
        locateUser();

        location = await new Promise<[number, number]>((resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error("Geolocalización no disponible"));
            return;
          }

          navigator.geolocation.getCurrentPosition(
            (pos) => resolve([pos.coords.latitude, pos.coords.longitude]),
            () => reject(new Error("No se pudo obtener ubicación")),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
          );
        });
      }

      const [lat, lng] = location;
      const link = toMapsLink(lat, lng);
      const text = `Ubicación compartida desde SafeMap GDL: ${link}`;

      if (navigator.share) {
        await navigator.share({
          title: "SafeMap GDL",
          text,
          url: link,
        });
        setTransientStatus("shared");
        return;
      }

      await navigator.clipboard.writeText(text);
      setTransientStatus("copied");
    } catch (error) {
      const isLocationError = error instanceof Error && error.message.includes("ubicación");
      setTransientStatus(isLocationError ? "location-error" : "share-error");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="absolute left-4 bottom-24 z-[999] flex flex-col items-start gap-2 max-md:left-3 max-md:bottom-[calc(7.75rem+env(safe-area-inset-bottom))]">
      {statusLabel && (
        <div className="rounded-lg border border-brand-border bg-brand-panel/95 px-3 py-1.5 text-[11px] text-gray-200 shadow-[0_4px_18px_rgba(0,0,0,0.45)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-1 duration-200">
          {statusLabel}
        </div>
      )}

      <button
        type="button"
        aria-label="Compartir ubicación segura"
        title="Compartir ubicación segura"
        onClick={() => void handleShare()}
        disabled={isSharing || isLocating}
        className="h-11 min-w-11 rounded-xl border border-brand-border bg-brand-panel/90 px-3 text-white backdrop-blur-md transition-all hover:bg-brand-hover hover:border-accent-purple shadow-[0_4px_20px_rgba(0,0,0,0.4)] active:scale-95 disabled:opacity-60"
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          {isSharing || isLocating ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Share2 size={16} />
          )}
          <span className="max-md:hidden">Compartir ubicación</span>
        </span>
      </button>
    </div>
  );
}
