"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

type Props = {
  src: string;
  poster: string;
  /** Nome acessível do vídeo (lido pelo leitor de tela). */
  title: string;
  className?: string;
};

/**
 * Toca sozinho (sem som, em loop) quando entra na tela e pausa quando sai.
 * Os controles ficam visíveis para ativar o som. Com "reduzir movimento" ativo
 * no sistema, não inicia sozinho e mostra um botão de reproduzir.
 */
export function VideoPlayer({ src, poster, title, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [blocked, setBlocked] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        } else if (reduceMotion.matches) {
          setBlocked(true);
        } else {
          video.play().catch(() => setBlocked(true));
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative aspect-[9/16] overflow-hidden bg-violet-950 ${className}`}>
      <video
        ref={ref}
        className="h-full w-full object-cover"
        controls
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={title}
        onPlay={() => setBlocked(false)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não consegue reproduzir este vídeo.
      </video>


      <button
        type="button"
        onClick={() => {
          const video = ref.current;
          if (video) video.muted = !video.muted;
        }}
        aria-pressed={!muted}
        aria-label={muted ? "Ativar o som do vídeo" : "Desligar o som do vídeo"}
        className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full bg-white py-2 pl-3 pr-4 text-sm font-semibold text-violet-950 shadow-lg shadow-violet-950/30 transition-colors hover:bg-peach-100"
      >
        {muted && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-white/70 motion-safe:animate-ping"
          />
        )}
        {muted ? (
          <VolumeX className="relative h-5 w-5" />
        ) : (
          <Volume2 className="relative h-5 w-5" />
        )}
        <span className="relative">{muted ? "Ativar som" : "Som ligado"}</span>
      </button>

      {blocked && (
        <button
          type="button"
          onClick={() => ref.current?.play()}
          aria-label={`Assistir: ${title}`}
          className="group absolute inset-0 flex items-center justify-center bg-violet-950/25 transition-colors hover:bg-violet-950/10"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-violet-900 shadow-xl shadow-violet-950/30 transition-transform group-hover:scale-105">
            <Play className="ml-1 h-8 w-8" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      )}
    </div>
  );
}
