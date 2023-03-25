import type { AppProps } from "next/app";
import { MainLayout } from "layouts";
import type { NextPageWithLayout } from "types";
import "../../styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
// eslint-disable-next-line react/display-name
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getNestedLayout = Component.getNestedLayout ?? ((page) => page);
  const mainLayoutProps = Component.mainLayoutProps ?? {
    title: "Talents Valley",
  };

  return (
    <MainLayout {...mainLayoutProps}>
      {getNestedLayout(<Component {...pageProps} />)}
    </MainLayout>
  );
}
