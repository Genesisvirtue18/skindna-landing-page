import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import API from "../api/axiousconfig"; // 👈 axios config

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate phone number
    // ✅ Validate phone number (only 10 digits, no spaces/symbols)
    const cleanedNumber = formData.number.trim();

    if (!/^[0-9]{10}$/.test(cleanedNumber)) {
      setError("⚠️ Please enter a valid 10-digit mobile number.");
      return;
    }


    try {
      const res = await API.post("/users", formData);
      if (res.status === 200 || res.status === 201) {
        setMessage("✅ We will connect shortly!");
        setError("");
        setFormData({ name: "", number: "" });

        // Auto close modal after 2s
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage("");
      setError("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-[#008285] py-12 px-6 poppins-regular">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 items-center gap-8 text-center md:text-left">
        {/* Left Side Text */}
        <div className="md:col-span-1 flex md:justify-start">
          <h2 className="text-2xl text-white leading-snug">
            Hair <br /> Consultation <br /> Includes:
          </h2>
        </div>

        {/* Right Side Features */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {
              img: "/Images/ChooseUs/consultant.png",
              text: "30-40 mins \ndetailed hair \nconsultation",
            },
            { img: "/Images/ChooseUs/hair-test.png", text: "Microscopic \nscalp test" },
            { img: "/Images/ChooseUs/hair-loss.png", text: "Knowing \ncause of your \nhair loss" },
            { img: "/Images/ChooseUs/hair-treatment.png", text: "Personalised \nhair treatment \nplan" },
          ].map((feature, index) => (
            <div key={index} className="flex text-white flex-col items-center">
              <img src={feature.img} alt="Feature" className="w-14 h-14 mb-2" />
              <div className="w-12 border-b-2 border-#008285 mb-2"></div>
              <p className="text-lg font-semibold whitespace-pre-line">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            setIsModalOpen(true);
            setError("");
            setMessage("");
            setFormData({ name: "", number: "" });
          }}
          className="bg-white text-black px-8 py-3 rounded-lg font-medium
             hover:bg-white hover:text-#008285 hover:border hover:border-#008285
             hover:shadow-lg hover:scale-105
             transition-all duration-300 ease-in-out"
        >
          Book Your Free Consultation
        </button>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center poppins-regular bg-black/50 z-50">
          <div className="bg-white w-[95%] md:w-[550px] p-10 shadow-2xl relative rounded-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <IoClose size={28} />
            </button>

            <h2 className="text-center w-full text-3xl font-bold text-[#5C1C33] mb-6">
              Sign Up To Book A Free Consultation!
            </h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 text-md rounded-md"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="border p-2 text-md rounded-md"
                value={formData.number}
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })
                }
                required
              />

              {/* Messages */}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {message && <p className="text-green-600 text-sm">{message}</p>}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-black text-white py-2 text-md rounded-lg w-60
             hover:bg-white hover:text-black hover:border hover:border-black 
             hover:shadow-lg hover:scale-105
             transition-all duration-300 ease-in-out"
                >
                  Book Free Consultation Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;
