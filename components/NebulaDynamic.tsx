"use client";

import dynamic from "next/dynamic";

const NebulaThreeBackground = dynamic(() => import("@/components/NebulaThreeBackground"), {
  ssr: false,
  loading: () => <div className="pointer-events-none fixed inset-0 z-0 bg-[#020206]" aria-hidden />,
});

export default function NebulaDynamic() {
  return <NebulaThreeBackground />;
}
