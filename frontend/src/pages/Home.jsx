import Biography from "../components/Biography";
import Departments from "../components/Departments";
import Hero from "../components/Hero";
import MessageForm from "../components/MessageForm";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome To Doctor Hospital | Your Trusted Healthcare Provider"}
        imageUrl={"./hero.png"}
      />
      <Biography imageUrl={"/about.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
