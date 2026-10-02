"use client";

import { useImperativeHandle, useRef, forwardRef } from "react";

const DEMO_SRC = "/edgecipline-demo.mp4";

export interface DemoVideoDialogHandle {
  open: () => void;
}

// Shared modal that plays the product tour video. Parents open it via a ref
// (so the trigger can be styled however each surface needs). Playback rewinds
// on open and pauses on close so re-opening always starts fresh.
const DemoVideoDialog = forwardRef<DemoVideoDialogHandle>(function DemoVideoDialog(_props, ref) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    dialogRef.current?.close();
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
      const v = videoRef.current;
      if (v) {
        v.currentTime = 0;
        void v.play().catch(() => {});
      }
    },
  }));

  return (
    <dialog
      ref={dialogRef}
      aria-label="Product demo video"
      onClick={(e) => e.target === e.currentTarget && close()}
      onClose={() => videoRef.current?.pause()}
      className="m-auto w-[min(24rem,calc(100vw-1.5rem))] overflow-hidden rounded-3xl border border-[rgba(0,255,178,0.25)] bg-black p-0 text-white shadow-[0_0_80px_rgba(0,255,178,0.12)] backdrop:bg-black/80 backdrop:backdrop-blur-md"
    >
      <div className="relative">
        <button
          type="button"
          onClick={close}
          aria-label="Close demo"
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/60 text-lg leading-none text-white/80 backdrop-blur-sm transition-colors duration-200 hover:bg-black/80 hover:text-white"
        >
          ✕
        </button>
        <video
          ref={videoRef}
          src={DEMO_SRC}
          controls
          playsInline
          preload="metadata"
          className="block max-h-[80vh] w-full bg-black"
        />
      </div>
    </dialog>
  );
});

export default DemoVideoDialog;
