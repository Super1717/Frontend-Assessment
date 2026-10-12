"use client";

import { useState } from "react";
import type { Op } from "@/types/ops";
import { InfoCard } from "../InfoCard";
import { DataTable } from "../DataTable";
import { Pill } from "../Pill";
import { AnimatedNumber } from "../AnimatedNumber";
import { CheckInButton } from "./CheckInButton";
import { Stack } from "@mui/material";
import { formatDateTimeRange } from "@/utils/formatDateTimeRange";
import { formatPercent } from "@/utils/formatPercent";

export function OpCard({ op }: { op: Op }) {
  const [operatorsNeeded, setOperatorsNeeded] = useState(op.operatorsNeeded);

  return (
    <InfoCard
      title={op.opTitle}
      subheader={
        <div style={{ whiteSpace: "pre-line" }}>
          {`ID ${op.publicId} · `}
          <AnimatedNumber value={operatorsNeeded} />
          {` operators needed\n${formatDateTimeRange(op.startTime, op.endTime)}`}
        </div>
      }
    >
      <DataTable
        rows={op.operators}
        getRowId={(operator) => {
          return op.opId + "-" + operator.id;
        }}
        columns={[
          {
            header: "Name",
            render: (operator) => {
              return operator.lastName + ", " + operator.firstName;
            },
          },
          {
            header: "Ops Completed",
            render: (operator) => operator.opsCompleted,
          },
          {
            header: "Reliablility",
            render: (operator) => formatPercent(operator.reliability),
          },
          {
            header: "Endorsements",
            render: (operator) => (
              <Stack direction="row" gap={0.5} flexWrap="wrap">
                {operator.endorsements.map((endorsement) => (
                  <Pill key={endorsement} label={endorsement} />
                ))}
              </Stack>
            ),
          },
          {
            header: "",
            render: () => (
              <CheckInButton
                onChange={(checkedIn) =>
                  setOperatorsNeeded((n) =>
                    // Todo: Add warning modal if check in > needed
                    Math.max(0, n + (checkedIn ? -1 : 1)),
                  )
                }
              />
            ),
            align: "center",
          },
        ]}
      />
    </InfoCard>
  );
}
