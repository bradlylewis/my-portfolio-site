export default function Contact() {
  return (
     <section id="contact" className="min-h-[calc(100vh-1rem)]">
      <div className="container flex flex-col py-24 mx-auto lg:max-w-6xl px-8 md:px-12 py-24 md:pt-30">
        <h1 className="text-2xl md:text-3xl font-semi-bold mb-7 md:mb-4">Contact Me</h1>
        <p className="hidden md:block text-gray-600 md:mb-12">Feel free to reach out and I'll get back to you as soon as possible.</p>
        <div>
          <form className="w-full space-y-4 md:space-y-8 bg-white p-8 rounded-md shadow-sm">
            <div className="flex flex-col">
              <label className="text-xs md:text-base tracking-wide mb-1" for="name">NAME</label>
              <input className="tracking-wide md:py-4 md:px-4" type="text" id="name" placeholder="Enter Your Name" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base tracking-wide mb-1" for="email">EMAIL</label>
              <input className="tracking-wide md:py-4 md:px-4" type="email" id="email" placeholder="Enter Your Email" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs md:text-base tracking-wide mb-1" for="message">MESSAGE</label>
              <textarea className="tracking-wide md:py-4 md:px-4" id="message" cols="30" rows="10" placeholder="Enter Your Message" required></textarea>
            </div>
            <button className="mt-8 w-full bg-brand-blue text-white rounded py-2 px-4 md:py-4 md:px-8" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}