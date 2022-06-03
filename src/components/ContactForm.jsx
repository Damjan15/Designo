import errorIcon from "../assets/contact/desktop/icon-error.svg"

const ContactForm = () => {
  return (
    <div className="contact bg-peach rounded-md">
      <div className="flex flex-col max-w-2xl mx-auto p-8 lg:flex-row lg:max-w-6xl lg:items-center lg:justify-between">
        <div className="text-center text-white md:text-left lg:w-1/2">
          <h2 className="text-3xl leading-9	font-medium	mb-4 md:text-4xl lg:text-5xl">Contact Us</h2>
          <p className="text-sm leading-6 lg:text-lg">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <form className="flex flex-col space-y-8 mt-11 lg:w-2/5">
            <div>
                <input type="text" className="input" placeholder="Name" />
                <span className="hidden w-full items-center text-xs italic text-white mt-2">Can't be empty <img src={errorIcon} className="ml-2" alt="Error Icon" /></span>
            </div>

            <div>
                <input type="text" className="input" placeholder="Email Address" />
                <span className="hidden w-full items-center text-xs italic text-white mt-2">Can't be empty <img src={errorIcon} className="ml-2" alt="Error Icon" /></span>
            </div>

            <div>
                <input type="text" className="input" placeholder="Phone" />
                <span className="hidden w-full items-center text-xs italic text-white mt-2">Can't be empty <img src={errorIcon} className="ml-2" alt="Error Icon" /></span>
            </div>

            <div>
                <textarea placeholder="Your message" cols="40" rows="5" className="input"></textarea>
                <span className="hidden w-full items-center text-xs italic text-white mt-2">Can't be empty <img src={errorIcon} className="ml-2" alt="Error Icon" /></span>
            </div>
            <div className="flex justify-end">
                <button className="bg-white uppercase text-darkGrey py-3 px-8 font-medium rounded-md hover:bg-lightPeach hover:text-white">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
