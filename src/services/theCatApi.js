export default async function theCatApi(path, ...args) {
  if (path[0] === '/') path = path.slice(1);
  try {
    const res = await fetch(`https://api.thecatapi.com/v1/${path}`, ...args);
    if (res.ok)
      return res.json();
    else
      throw new Error(`"${path}" request returned "${res.status}" status`);
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.error(err);
  alert('Apologies but we could not load new cats for you at this time! Miau!');
}
