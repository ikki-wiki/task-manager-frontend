const api = "http://localhost:5000";

export async function getHello() {
  console.log("Fetching from", api);
  const res = await fetch(`${api}/`);
  return res.text();
}
