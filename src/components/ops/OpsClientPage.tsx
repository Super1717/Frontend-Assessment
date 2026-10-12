"use client";

import { useGetOps } from "@/hooks/useGetOps";
import { OpCard } from "./OpCard";
import { Stack } from "@mui/material";

export function OpsClientPage() {
  const { data, isPending, isError } = useGetOps();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Stack gap={2}>
      {data.map((op) => (
        <OpCard key={op.publicId} op={op} />
      ))}
    </Stack>
  );
}
