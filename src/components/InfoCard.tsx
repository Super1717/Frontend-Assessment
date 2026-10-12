import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

interface InfoCardProps {
  title: React.ReactNode;
  subheader?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export function InfoCard({
  title,
  subheader,
  children,
  actions,
}: InfoCardProps) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader title={title} subheader={subheader} />
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
