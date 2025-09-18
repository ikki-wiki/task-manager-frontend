import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Settings() {
  const [backendUrl, setBackendUrl] = useState("");

  useEffect(() => {
    // Optionally, load saved backend URL from localStorage
    const savedUrl = localStorage.getItem("backend_url") || "";
    setBackendUrl(savedUrl);
  }, []);

  const saveBackendUrl = () => {
    localStorage.setItem("backend_url", backendUrl);
    alert("Backend URL saved!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Theme toggle */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Theme</h2>
        <ThemeToggle />
      </div>

      {/* Backend URL */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Backend URL</h2>
        <input
          type="text"
          value={backendUrl}
          onChange={(e) => setBackendUrl(e.target.value)}
          placeholder="https://your-backend-url.com"
          className="border rounded px-2 py-1 w-full"
        />
        <Button className="mt-2" onClick={saveBackendUrl}>
          Save
        </Button>
      </div>

      {/* Add other settings sections here */}
    </div>
  );
}

export default Settings;
