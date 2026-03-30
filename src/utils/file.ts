export const publicPath = (path: string) => {
  if (path.startsWith("http")) return path;
  return process.env.PUBLIC_URL + path;
};
