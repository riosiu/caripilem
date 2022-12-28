import React from "react";
import Footers from "./footer";
import Headers from "./header";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Headers />
      {props.children}
      <Footers />
    </div>
  );
}
