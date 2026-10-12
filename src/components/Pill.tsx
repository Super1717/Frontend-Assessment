import { Chip } from "@mui/material";

export function Pill({ label }: { label: React.ReactNode }) {
  return <Chip label={label} size="small" variant="outlined" />;
}
