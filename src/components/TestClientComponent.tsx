"use client";

import { useGetOps } from "@/hooks/useGetOps";
import { Button, Typography } from "@mui/material";
import { InfoCard } from "./InfoCard";

export function TestClientComponent() {
  const { data, isPending, isError } = useGetOps();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return data.map((op) => (
    <InfoCard
      title={op.opTitle}
      subheader={
        <div style={{ whiteSpace: "pre-line" }}>
          {`ID ${op.publicId} · ${op.operatorsNeeded} operators needed
          ${op.startTime} - ${op.endTime}`}
        </div>
      }
    >
      <Typography variant="body2">Todo Table</Typography>
    </InfoCard>
  ));
}
