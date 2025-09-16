const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getHello() {
  const res = await fetch(`${API_URL}/`);
  return res.text();
}
