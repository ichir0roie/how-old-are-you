import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Info from "../components/info";

const Home: NextPage = () => {
  return (
    <div>
      <Info></Info>
    </div>
  );
};

export default Home;
