/** @jsx jsx */
import jsx from "../jsx";
import React from "react";
import ColorModeButton from "../components/ColorModeButton";

function ColorModeApplier({ ...props }) {
  return (
    <ColorModeButton onClick={props.onClick}>
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="currentcolor"
        style={{
          display: "block"
        }}
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentcolor"
          strokeWidth="4"
        />
        <path
          d={`
            M 16 0
            A 16 16 0 0 0 16 32
            z
            `}
        />
      </svg>
    </ColorModeButton>
  );
}

export default ColorModeApplier;
