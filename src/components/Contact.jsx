import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("Sending...");
    emailjs.sendForm("service_b82f4dp", "template_b9if58v", formRef.current, "xO9hnjAXRWZMkd21G").then(
      () => {
        toast.dismiss();
        toast.success("Message sent!");
        formRef.current.reset();
      },
      () => {
        toast.dismiss();
        toast.error("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="min-h-[calc(100vh-1rem)]">
      <div className="container flex flex-col py-24 mx-auto lg:max-w-6xl px-8 md:px-12 py-24 md:pt-30">
        <h1 className="text-2xl md:text-3xl font-semi-bold mb-7 md:mb-4">Contact Me</h1>
        <p className="hidden md:block text-gray-600 dark:text-gray-300 md:mb-12">Feel free to reach out and I'll get back to you as soon as possible.</p>
        <div>
          <form ref={formRef} onSubmit={handleSubmit} className="w-full space-y-4 md:space-y-8 bg-white dark:bg-gray-800 p-8 rounded-md shadow-sm dark:shadow-gray-700">
            <div className="flex flex-col">
              <label className="text-xs md:text-base tracking-wide mb-1" for="name">
                NAME
              </label>
              <input className="tracking-wide md:py-4 md:px-4" type="text" id="name" name="name" placeholder="Enter Your Name" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base tracking-wide mb-1" for="email">
                EMAIL
              </label>
              <input className="tracking-wide md:py-4 md:px-4" type="email" id="email" name="email" placeholder="Enter Your Email" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base tracking-wide mb-1" for="message">
                MESSAGE
              </label>
              <textarea
                className="tracking-wide md:py-4 md:px-4"
                id="message"
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <button className="mt-8 w-full bg-brand-blue text-white rounded py-2 px-4 md:py-4 md:px-8" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
