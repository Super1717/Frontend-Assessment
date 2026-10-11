"use client";

import { useGetOps } from "@/hooks/useGetOps";

export function TestClientComponent() {
  const { data, isPending, isError } = useGetOps();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
