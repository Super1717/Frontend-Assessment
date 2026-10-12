import { Card, CardContent, CardHeader } from "@mui/material";

interface InfoCardProps {
  title: React.ReactNode;
  subheader?: React.ReactNode;
  children?: React.ReactNode;
}

export function InfoCard({ title, subheader, children }: InfoCardProps) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardHeader
        title={title}
        subheader={subheader}
        sx={{ px: 4, pt: 3, pb: 1 }}
        slotProps={{
          title: { variant: "h1", fontWeight: 600 },
        }}
      />
      {children && <CardContent sx={{ px: 4, pb: 3 }}>{children}</CardContent>}
    </Card>
  );
}
