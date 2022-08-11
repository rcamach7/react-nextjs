import Head from "next/head";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();

  // If user exists, navigate the to the message board.
  useEffect(() => {
    if (user) {
      router.push("/board");
    }
  }, [user]);

  return (
    <div className="container flex-col">
      <Head>
        <title>Group Chat </title>
        <meta name="description" content="Group chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>User does not exist</p>
    </div>
  );
}
