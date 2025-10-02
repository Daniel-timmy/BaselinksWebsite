import React from "react";
import Form from "../components/contact/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="fixed w-full z-50 top-0">
        <Header />
      </div>{" "}
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
