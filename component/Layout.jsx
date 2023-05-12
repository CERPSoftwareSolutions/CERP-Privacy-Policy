import { Default, Sidebar, Main, Footer } from "nextra-theme-docs";
import { CustomHeader } from "./head";

export default function Layout(props) {
  const { meta, route, ...rest } = props;

  // Use custom layouts with common components anywhere
  if (route.startsWith("/custom")) {
    return function Layout({ children }) {
      return (
        <>
          <CustomHeader />
          <Sidebar />
          <Main>{ children }</Main>
          <Footer />
        </>
      );
    };
  }

  // Retain the default layout for all other routes
  return Default();
}