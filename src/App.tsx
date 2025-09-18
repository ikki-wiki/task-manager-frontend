import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Home } from "@/pages/Home";
import { Tasks } from "@/pages/Tasks";
import { Settings } from "@/pages/Settings";
import { ThemeProvider } from "@/components/theme-provider";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Load sidebar state from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("sidebar_state");
    if (saved !== null) {
      setSidebarOpen(saved === "true");
    }
  }, []);

  // Save sidebar state when it changes
  useEffect(() => {
    localStorage.setItem("sidebar_state", String(sidebarOpen));
  }, [sidebarOpen]);

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex">
          <SidebarProvider defaultOpen={sidebarOpen} onOpenChange={setSidebarOpen}>
            <AppSidebar />
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </SidebarProvider>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
