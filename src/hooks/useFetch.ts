import React from "react";
import { errorLogger } from "../helpers";

type ErrorType = string | null;
interface TUseFetchProps {
  url: string;
  queryParams: string;
}

interface TUseFetchReturnType<T> {
  isLoading: boolean;
  data: T | undefined;
  error: ErrorType;
}

const useFetch = <TResponseData>({
  url,
  queryParams,
}: TUseFetchProps): TUseFetchReturnType<TResponseData> => {
  const [data, setData] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<ErrorType>(null);

  if (!process.env.REACT_APP_NEWS_API_KEY) {
    throw Error("No API key found!");
  }

  React.useEffect(() => {
    setIsLoading(true);

    fetch(`${process.env.REACT_APP_BASE_URL}${url}?${queryParams}`, {
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_NEWS_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch((err) => {
        errorLogger(err);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [url, queryParams]);

  return { isLoading, data, error };
};

export default useFetch;
