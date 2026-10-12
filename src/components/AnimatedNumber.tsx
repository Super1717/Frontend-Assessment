import { useState } from "react";
import { Box } from "@mui/material";
import { keyframes } from "@mui/material/styles";

const settle = keyframes`
  from { filter: blur(4px); opacity: 0.3; transform: scale(1.3); }
  to { filter: blur(0); opacity: 1; transform: scale(1); }
`;

export function AnimatedNumber({ value }: { value: number }) {
  const [state, setState] = useState({ value, changed: false });
  if (state.value !== value) setState({ value, changed: true });
  const { changed } = state;

  return (
    <Box
      key={value}
      component="span"
      sx={{
        display: "inline-block",
        animation: changed ? `${settle} 0.4s ease-out` : undefined,
      }}
    >
      {value}
    </Box>
  );
}
