"use client";

import { useGetOps } from "@/hooks/useGetOps";
import { InfoCard } from "./InfoCard";
import { DataTable } from "./DataTable";

export function TestClientComponent() {
  const { data, isPending, isError } = useGetOps();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return data.map((op) => (
    <InfoCard
      key={op.publicId}
      title={op.opTitle}
      subheader={
        <div style={{ whiteSpace: "pre-line" }}>
          {`ID ${op.publicId} · ${op.operatorsNeeded} operators needed
${op.startTime} - ${op.endTime}`}
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
            render: (operator) => operator.reliability,
          },
          {
            header: "Endorsements",
            render: (operator) => operator.endorsements,
          },
          {
            header: "",
            render: () => "Todo Check In",
          },
        ]}
      />
    </InfoCard>
  ));
}
