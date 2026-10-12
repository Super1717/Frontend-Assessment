"use client";

import { useState } from "react";
import { useGetOps } from "@/hooks/useGetOps";
import type { Op } from "@/types/ops";
import { OpCard } from "./OpCard";
import { SearchInput } from "../SearchInput";
import { Stack, Typography } from "@mui/material";

const includes = (value: string, query: string) =>
  value.toLowerCase().includes(query);

function filterOps(ops: Op[], search: string): Op[] {
  const query = search
    .replace(/,/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
  if (!query) return ops;

  return ops.flatMap((op) => {
    if (includes(op.opTitle, query) || includes(op.publicId, query))
      return [op];

    const operators = op.operators.filter((o) =>
      [`${o.firstName} ${o.lastName}`, `${o.lastName} ${o.firstName}`].some(
        (name) => includes(name, query),
      ),
    );
    return operators.length ? [{ ...op, operators }] : [];
  });
}

export function OpsClientPage() {
  const { data, isPending, isError } = useGetOps();
  const [search, setSearch] = useState("");

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const byStartTime = [...data].sort(
    (a, b) => Date.parse(a.startTime) - Date.parse(b.startTime),
  );
  const ops = filterOps(byStartTime, search);

  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="flex-end">
        <SearchInput
          label="Search by operator name, op title or ID"
          onSearch={setSearch}
        />
      </Stack>
      {ops.length === 0 && <Typography>No ops found</Typography>}
      {ops.map((op) => (
        <OpCard key={op.publicId} op={op} />
      ))}
    </Stack>
  );
}
