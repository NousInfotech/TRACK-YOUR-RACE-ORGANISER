import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./context/theme-provider";
import Pages from "@/pages";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="h-screen overflow-clip">
        <Toaster />
        <Pages />
      </div>
    </ThemeProvider>
  );
}

export default App;
