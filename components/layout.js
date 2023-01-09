import React from "react";
import Footers from "./footer";
import Headers from "./header";
import Head from "next/head";
export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <main>{props.children}</main>
        <Footers />
      </div>
    </>
  );
}
