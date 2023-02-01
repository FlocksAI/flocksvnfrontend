import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNprogress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress height={8} color="#D9FD00" />
      <Component {...pageProps} />
    </>
  );
}
