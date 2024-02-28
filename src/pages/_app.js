import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Navbar from "@/components/Navbar";
import CollapsableMenu from "../components/CollapsableMenu";
// import { BlogList } from "@/components/BlogList";
export default function App({ Component, pageProps }) {
  return (
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
  );
}
