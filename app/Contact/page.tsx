"use client";
import "../globals.css";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Modal from "../components/modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "b9d189c7-d15a-4cc9-8baf-bb2ea3a62424");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setShowModal(true);

      // Reset form fields after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
    }

    setIsLoading(false);
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact-height flex gap-16 justify-center pt-44">
      <div className="flex flex-col w-4/12">
        <h1 className="text-3xl pb-5">Contact Me</h1>
        <p className="text-lg pb-14">Feel free to drop me a message</p>
        <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-100 p-2 my-2"
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-100 p-2 my-2"
            disabled={isLoading}
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="border border-gray-100 p-2 my-2"
            disabled={isLoading}
            rows={4}
          ></textarea>
          <button
            className="hover:bg-green-500 bg-teal-600 text-white font-bold py-2 px-4 rounded w-4/12 "
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <div>
        <p className="pb-2">Phone: +44 7776 112 153</p>
        <p className="pb-4">Email: kyleabrahamse@outlook.com</p>
        <div className="flex gap-2">
          <div className="bg-blue-500 rounded hover:bg-green-600">
            <Link href="https://github.com/kyleabrahamse" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-8 text-white p-2 rounded"
              />
            </Link>
          </div>
          <div className="bg-gray-950 text-white rounded hover:bg-green-600">
            <Link href="https://github.com/kyleabrahamse" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon  h-8 p-2" />
            </Link>
          </div>
        </div>
      </div>
      {showModal && <Modal onClose={closeModal} />}
    </div>
  );
}
