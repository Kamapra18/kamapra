// Nama file contoh: components/UnicornWrapper.tsx
"use client";
import UnicornScene from "unicornstudio-react";

export default function UnicornWrapper() {
  return (
    <UnicornScene
      projectId="h3mlTKbpwHHboePNjpHO"
      width="390px"
      height="844px"
      scale={1}
      dpi={1.5}
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.4/dist/unicornStudio.umd.js"
    />
  );
}
