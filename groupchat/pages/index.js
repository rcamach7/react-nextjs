import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Home({ isConnected }) {
  return (
    <div>
      <Head>
        <title>Group Chat </title>
        <meta name="description" content="Group chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        {isConnected ? "Connected with MongoDB" : "Did not connect to MongoDB"}
      </h1>
    </div>
  );
}

export async function getServerSideProps(props) {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (error) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
