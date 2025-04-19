import { SidebarProvider } from "./components/ui/sidebar";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./context/theme-provider";
import Pages from "@/pages";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="h-screen overflow-clip">
          <Toaster />
          <Pages />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
