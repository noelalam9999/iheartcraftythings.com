import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Navbar from "@/components/Navbar";
import CollapsableMenu from "../components/CollapsableMenu";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState } from "react";

// import { BlogList } from "@/components/BlogList";
export default function App({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="body">
          <div className="background">
            <div className="container">
              <Navbar />
              <Component {...pageProps} />
            </div>
            <CollapsableMenu />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
