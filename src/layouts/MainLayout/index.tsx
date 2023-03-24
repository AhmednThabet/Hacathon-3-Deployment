import Head from "next/head";
import { Footer, Navbar } from "./components";
import type { MainLayoutType } from "layouts/types";

export const MainLayout: MainLayoutType = ({
  children,
  title,
  pageDescription = "Talents Valley platform",
  withoutNavbar = false,
  contentClassName = "",
  footerClassName = "",
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!withoutNavbar && (
        <header>
          <Navbar />
        </header>
      )}
      <main
        className={`flex-1 flex justify-center items-center min-h-fit ${contentClassName}`}
      >
        {children}
      </main>
      <Footer className={footerClassName} />
    </div>
  );
};

export default MainLayout;
