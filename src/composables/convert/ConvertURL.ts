export const convertUrlToTitle = (url: string) => {
  const parts = url.replace(/^\/+/, '').split('/');
  const product = parts[parts.length - 1];
  return product
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
