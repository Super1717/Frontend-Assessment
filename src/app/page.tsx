import { Header } from "@/components/Header";
import { TestClientComponent } from "@/components/TestClientComponent";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ mx: 8, mt: 4 }}>
        <TestClientComponent />
      </Box>
    </>
  );
}
