export const  joinPaths = (props: string[]): string => {
  return "/"+props.map(item => item.replace(/^\/+/, "")).join("/");
};
