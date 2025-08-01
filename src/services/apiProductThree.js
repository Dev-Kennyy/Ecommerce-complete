export async function thirdAppi() {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
  if (!res.ok) throw new Error(`Third API lo ni Error`);
  const data = res.json();
  return data;
}
