import "@/styles/globals.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());

  useEffect(() => {
    client.setDefaultOptions({
      queries: {
        onError: (error) => {
          if (error instanceof AxiosError)
            toast(error.response?.data ?? error.message);
        },
      },
    });
  }, [client]);
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Hydrate state={pageProps.dehydratedState}>
        <ToastContainer />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
