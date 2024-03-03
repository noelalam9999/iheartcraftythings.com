import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogsList";
import CollapsableMenu from "@/components/CollapsableMenu";
import blogs from "@/data/bloglist.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>I Heart Crafty Things</title>
      </Head>

      <BlogList blogs={blogs} />
      {/* <div className="body">
        <div className="background">
          <div className="container">
            <Navbar />
            <BlogList />
          </div>
          <CollapsableMenu />
        </div>
      </div> */}
    </>
  );
}
