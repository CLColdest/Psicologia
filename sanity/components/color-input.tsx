"use client";

import type { ChangeEvent } from "react";
import { set, type StringInputProps } from "sanity";

export function ColorInput(props: StringInputProps) {
  const { elementProps, onChange, value } = props;
  const colorValue = typeof value === "string" && value.length > 0 ? value : "#000000";

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "10px",
            padding: "4px",
            background: "rgba(255,255,255,0.04)"
          }}
        >
          <input
            aria-label="Seleccionar color"
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(set(event.currentTarget.value))}
            style={{ width: 44, height: 44, border: "none", background: "transparent", padding: 0 }}
            type="color"
            value={colorValue}
          />
        </div>
        <div style={{ flex: 1 }}>
          <input
            {...elementProps}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(set(event.currentTarget.value))}
            style={{
              width: "100%",
              minHeight: 44,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "transparent",
              color: "inherit",
              padding: "0 12px"
            }}
            value={value || ""}
          />
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>
        Puedes elegir el color visualmente o pegar el valor hexadecimal.
      </p>
    </div>
  );
}
