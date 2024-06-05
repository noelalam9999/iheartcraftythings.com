import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Navbar from "@/components/Navbar";
import CollapsableMenu from "../components/CollapsableMenu";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState } from "react";
import Footer from "../components/Footer";

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
        <Navbar />
        <div className="background">
          <Component {...pageProps} />
        </div>
        <Footer />
        <CollapsableMenu />
      </Provider>
    </QueryClientProvider>
  );
}
