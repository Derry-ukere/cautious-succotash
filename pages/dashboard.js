import Head from "next/head";
import { getSession } from "next-auth/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Dashboard = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="this ia blog section" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.title}>
          Welcome to the Dashboard{" "}
          <a href="https://nextjs.org">{userInfo.user.name}</a>
        </h1>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>User Details &rarr;</h2>
            <p>Name : {userInfo.user.name}</p>
            <p>Email : {userInfo.user.email}</p>
            <p>
              image : <img src={userInfo.user.image} className={styles.pic} />
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;

// export const  getServerSideProps : GetServerSideProps = async () =>{
//   // const session = await getSession();
// //  console.log('this is session info from the dashboad', session)
// //  return{
// //    session
// //  }
// }
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
// }

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      userInfo: session,
    },
  };
}
