// import React from 'react'
// import rateStar from './assets/rateStar.png';
const ContactPage = () => {
  return (
<div className="flex bg-yellow-500 items-center justify-center py-12 w-full font-serif">
  <div className="w-1/2 flex flex-col space-y-12 px-12">
    
    <div className="flex flex-col space-y-4">
      <h1 className="text-black text-center text-4xl font-bold">Get in Touch</h1>
      <h2 className="text-black text-center text-lg font-medium">We will get back to you within 24 hours.</h2>
    </div>

    <div className="flex space-x-8">
      <div className="flex-1 space-y-3">
        <label htmlFor="first-name" className="block text-black font-semibold">First Name</label>
        <input
          id="first-name"
          placeholder="First Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex-1 space-y-3">
        <label htmlFor="last-name" className="block text-black font-semibold">Last Name</label>
        <input
          id="last-name"
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
    <div className="space-y-3">
      <label htmlFor="email" className="block text-black font-semibold">Email</label>
      <input
        id="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    <div className="space-y-3">
      <label htmlFor="phone" className="block text-black font-semibold">Phone Number</label>
      <input
        id="phone"
        placeholder="Phone Number"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>

    <div className="space-y-3">
      <label htmlFor="message" className="block text-black font-semibold">Message</label>
      <textarea
        id="message"
        placeholder="Type your message"
        className="w-full h-24 p-2 border border-gray-300 rounded"
      ></textarea>
    </div>
    
    <button className="text-white bg-black w-full py-3 rounded hover:bg-gray-800">Send Message</button>
  </div>

  <div className="w-1/2 flex items-center justify-center">
    <div className="w-1 h-96 bg-orange-950 rounded"></div>
  </div>
  
  <div className="w-1/2 flex flex-col space-y-12 px-12">
    <div className="text-center space-y-4">
      <h1 className="text-black text-4xl font-bold">Customer Reviews</h1>
      <h2 className="text-black text-lg font-medium">For the love of our clients.</h2>
    </div>

    <div className="space-y-6">
      <div className="bg-white p-6 border border-gray-200 rounded shadow">
        <p className="text-gray-700">The ambiance of the shop is cozy and welcoming, with friendly staff who are more than happy to let you sample flavors before making a choice. The waffle cones are freshly made and add a wonderful crunch to the experience.</p>
        <h3 className="mt-4 text-gray-900 font-semibold">Duncan</h3>
        <p className="text-gray-500">Student</p>
      </div>
      <div className="bg-white p-6 border border-gray-200 rounded shadow">
        <p className="text-gray-700">What stood out to me the most was their commitment to using high-quality, locally sourced ingredients. You can really taste the difference in every scoop. The prices are reasonable for the quality, and they even offer vegan and dairy-free options, which is a big plus.</p>
        <h3 className="mt-4 text-gray-900 font-semibold">Tshego</h3>
        <p className="text-gray-500">Primary Student</p>
      </div>
    </div>
  </div>
</div>

  
  )
}

export default ContactPage