"use client";

import Snowfall from "react-snowfall";

export default function SnowfallEffect() {
  return (
    <Snowfall
      color="#38BDF8"
      snowflakeCount={100}
      style={{
        position: "fixed",
        // width: "100vw",
        // height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
