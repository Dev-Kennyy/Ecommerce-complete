export async function apiProductTwo() {
  const res = await fetch(`https://dummyjson.com/products`);
  if (!res.ok) throw new Error(`Error in API Products`);
  const data = await res.json();
  return data.products;
}
