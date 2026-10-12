import { Header } from "@/components/Header";
import { OpsClientPage } from "@/components/ops/OpsClientPage";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ mx: 8, my: 4 }}>
        <OpsClientPage />
      </Box>
    </>
  );
}
