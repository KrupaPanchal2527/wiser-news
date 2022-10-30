export const errorLogger = (err: any) => {
  console.error(err);
  // you can make connection to any other error logging services to collect errors
};

export const generateQueryParamsFromObj = (obj: Record<string, string>) => {
  return Object.entries(obj)
    .reduce((acc, item) => {
      return acc + `${item[0]}=${item[1]}&`;
    }, "")
    .slice(0, -1);
};
