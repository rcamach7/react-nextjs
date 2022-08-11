import Head from "next/head";

export default function Home() {
  return (
    <div className="container flex-col">
      <Head>
        <title>Group Chat </title>
        <meta name="description" content="Group chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>I am Ricardo</p>
      <p>I am Tito</p>
    </div>
  );
}
