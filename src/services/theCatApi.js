export default function theCatApi(path, ...args) {
  if (path[0] === '/') path = path.slice(1);
  return fetch(`https://api.thecatapi.com/v1/${path}`, ...args);
}
