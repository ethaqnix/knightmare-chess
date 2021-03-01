import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ title, children }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header title={title} />
      <div
        style={{ display: "flex", flexGrow: 1, backgroundColor: "aliceblue" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
