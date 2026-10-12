import { ThemeProvider } from "@/theme/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { QueryProvider } from "@/providers/QueryProvider";
import { Header } from "@/components/Header";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <QueryProvider>
              <Header />
              <Box sx={{ mx: 8, my: 4 }}>{children}</Box>
            </QueryProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
