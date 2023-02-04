import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../Title/Title";

const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Here you will get free different kind of authentic coctails by free of cost",
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info:
        "Here we have unique hiking experience with our natural trails where you can connect with nature.",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "We provide shuttlevan service for airport pickup and drop off service also provide shuttle to visit our property.",
    },
    {
      icon: <FaBeer />,
      title: "storages beer",
      info:
        "we have stored different kind beer of man made chilled Beers.",
    },
  ];

  return (
    <section className="services">
      <Title title="services" />

      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="services">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;