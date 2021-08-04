import App from "next/app";
import Head from "next/head";
import "ress";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks/msw");
}

export default class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Next App</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
