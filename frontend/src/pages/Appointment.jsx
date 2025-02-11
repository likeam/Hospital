import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";
import React from "react";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Shedule Your Appointment | Doctor Hospital"}
        imageUrl={"/signin.jpg"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
