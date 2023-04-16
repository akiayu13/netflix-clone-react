import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FAQSection = () => {
  const [revealAnswers, setRevealAnswers] = useState({});

  const toggleAnswer = (index) => {
    setRevealAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide range of TV shows, movies, documentaries, and more. You can watch unlimited content on various devices for a fixed monthly subscription fee.",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Netflix offers different subscription plans with varying prices. You can choose from Basic, Standard, and Premium plans, each with different features and pricing. Visit Netflix's website to see the current pricing and plans.",
    },
    {
      question: "Where can I watch?",
      answer:
        "You can watch Netflix on various devices including smart TVs, game consoles, streaming media players, smartphones, tablets, and laptops. Simply sign up for an account and start streaming your favorite shows and movies.",
    },
    {
      question: "How do I cancel?",
      answer:
        "You can cancel your Netflix subscription anytime. There are no long-term commitments, and you can cancel online with just a few clicks. There are no cancellation fees, and you can continue to access your account until the end of your billing cycle.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix offers a wide range of shows, movies, and documentaries from various genres including drama, comedy, action, romance, sci-fi, and more. The available content varies by region, and new shows and movies are added regularly. You can explore the catalog on Netflix's website to find the latest releases and popular titles.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "Yes, Netflix offers a wide range of kid-friendly shows and movies suitable for different age groups. You can set up separate profiles for kids with age-appropriate content and parental controls to ensure a safe viewing experience.",
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="w-full md:w-4/5 lg:w-3/4 xl:w-5/6 mx-auto text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="w-full md:w-4/5 lg:w-3/4 xl:w-5/6 mx-auto mb-4 bg-gray-900 rounded-md px-4 py-3 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex items-center justify-between text-xl font-semibold mb-3">
              <span>{faq.question}</span>
              <span>
                <FaPlus
                  className={`transform transition-transform ${
                    revealAnswers[index] ? "rotate-45" : ""
                  }`}
                />
              </span>
            </div>
            {revealAnswers[index] && (
              <p className="text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
