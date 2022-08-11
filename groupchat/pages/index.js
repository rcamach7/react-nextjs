import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Group Chat </title>
        <meta name="description" content="Group chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>
    </div>
  );
}

// export async function getServerSideProps(props) {
//   try {
//     // Connect to our database.
//     await connectMongo();
//     const users = await User.find({});
//     return {
//       props: {
//         isConnected: true,
//         data: users,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: { isConnected: false, data: null },
//     };
//   }
// }
