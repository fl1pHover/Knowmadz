import React from "react";

import Navbar from "../components/Nav";
import Work from "../components/Travel";
import Footer from "../components/Footer";

// Loader and Animation
import PageOut from "./PageOut";

const Workpage = () => {
  return (
    <PageOut>
      <Navbar />
      <Work />
      <Footer />
    </PageOut>
  );
};

export default Workpage;
