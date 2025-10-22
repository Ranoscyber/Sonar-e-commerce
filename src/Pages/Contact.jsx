function Contact() {
  return (
    <div className="max-w-[90%] lg:max-w-3xl mx-auto my-10">
      <form className="w-full  shadow-md p-4" action="">
        <h1 className="text-center text-3xl font-bold font-jost">
          Contact Us{" "}
        </h1>

        <div className="mb-3">
          <label>
            Name <span className="text-red-500">*</span>
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-full px-2 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out rounded-[8px] mt-[10px]"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <label>
            Phone <span className="text-red-500">*</span>
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-full px-2 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out rounded-[8px] mt-[10px]"
            placeholder="Enter Your phone"
          />
        </div>
        <div className="mb-3">
          <label>
            Message <span className="text-red-500">*</span>
          </label>{" "}
          <br />
          <textarea
            type="text"
            className=" h-[150px] w-full px-2 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out rounded-[8px] mt-[10px]"
            placeholder="Enter Your phone"></textarea>
        </div>
            <div className="flex justify-end">
            <button type="submit" className="bg-primary text-white px-8 py-2 rounded-md">Submit</button>
            </div>
      </form>
    </div>
  );
}

export default Contact;
