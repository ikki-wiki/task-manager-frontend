const LOCAL_API = "http://localhost:5000";
const PROD_API = "https://task-manager-backend-9yge.onrender.com";

const API_URL =
  import.meta.env.PROD // Vite sets this to true in production build
    ? PROD_API
    : LOCAL_API;

export async function getHello() {
  const res = await fetch(`https://task-manager-backend-9yge.onrender.com/`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.text();
}
