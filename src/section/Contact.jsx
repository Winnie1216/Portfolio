import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";



const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_l396h5h",
        "template_9856gz4",
        {
          from_name: form.name,
          to_name: "Winnie",
          from_email: form.email,
          to_email: "winnie1197943420@gmail.com",
          message: `Sender's name: ${form.name} \n Sender's Email: ${form.email}\n\nMessage: ${form.message}`,
        },
        "7asuJmVPQzzt3RYLE"
      )
      .then(() => {
        setLoading(false);
        showAlert({
          text: " Thank you for your message 😀",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        showAlert({
          text: "I didn't receive your message 😭",
          type: "danger",
        });
      });
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="my-20 w-full px-[16px] " id="contact">
          {alert.show && <Alert {...alert} />}

      <div className="relative w-full flex flex-col justify-center items-center py-20 ">
        <img
          src="/Portfolio/assets/terminal.png"
          alt="terminal"
          className="inset-0 absolute min-h-screen "
        />
        <div className="relative flex flex-col gap-5  justify-start z-10 max-w-xl px-10 text-left w-[600px]">
          <div className="head-text   ">Let's talk</div>
          <p className="grid-subtext ">
           
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full py-3 flex flex-col space-y-7"
          >
            <label className="flex flex-col gap-2 justify-center items-start w-full">
              <span className="text-gray-200 text-xl">Full name</span>
              <input
                type="text"
                name="name"
                placeholder="ex., Winnie"
                required
                value={form.name}
                onChange={handleChange}
                className="bg-[#1f1d24] p-3 rounded-xl w-full min-h-14 focus:outline-none text-gray-200"
              />
            </label>
            <label className="flex flex-col gap-2 justify-center items-start w-full">
              <span className="text-gray-200 text-xl"> Email</span>
              <input
                type="text"
                name="email"
                placeholder="ex., huihuiyao1120@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                className="bg-[#1f1d24] p-3 rounded-xl w-full min-h-14 focus:outline-none text-gray-200"
              />
            </label>
            <label className="flex flex-col gap-2 justify-center items-start w-full">
              <span className="text-gray-200 text-xl"> Your Message</span>
              <textarea
                required
                value={form.message}
                onChange={handleChange}
                name="message"
                rows={5}
                className="bg-[#1f1d24] p-3 rounded-xl w-full min-h-20 focus:outline-none text-gray-200"
                placeholder="ex.,I'm very interested in your ..."
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-[#1f1d24] w-full py-4 flex items-center text-white text-[16px] justify-center rounded-xl gap-3 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading..." : "Send Message"}
              <img
                src="/Portfolio/assets/arrow-up.png"
                alt="submit"
                className="h-3 w-3 "
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
