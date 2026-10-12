"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import { veryableBlue } from "@/theme/globalStyles";

export function CheckInButton({
  onChange,
}: {
  onChange?: (checkedIn: boolean) => void;
}) {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <Button
      variant="contained"
      size="small"
      color={checkedIn ? "error" : "inherit"}
      sx={checkedIn ? undefined : { bgcolor: veryableBlue, color: "white" }}
      onClick={() => {
        setCheckedIn(!checkedIn);
        onChange?.(!checkedIn);
      }}
    >
      {checkedIn ? "Check Out" : "Check In"}
    </Button>
  );
}
