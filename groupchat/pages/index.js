import Head from "next/head";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUserContext();

  return (
    <div className="container flex-col">
      <Head>
        <title>Group Chat </title>
        <meta name="description" content="Group chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
