const BASE_URL = import.meta.env.VITE_API_URL;

export async function getHello() {
  const res = await fetch(`${BASE_URL}/`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.text();
}
