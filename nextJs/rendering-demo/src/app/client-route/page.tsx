"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

// import "./ImageSlider.css";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <>
      <h1
        style={{
          color: theme.colors.primary,
        }}
      >
        Client Route {result}
      </h1>
    </>
  );
}
