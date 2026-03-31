import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import API from "../api/axiousconfig"; // 👈 Axios config

const PopularTreatments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const treatments = [
    { title: "Anti-Aging Treatment", img: "/Images/Popular/anti-aging.jpg" },
    { title: "Hairfall Treatment", img: "/Images/Popular/laser-hair-removal.jpg" },
    { title: "Pigmentation Treatment", img: "/Images/Treatments/pigmentation.jpg" },
    { title: "Laser Hair Reduction", img: "/Images/Popular/laser-hair-removal.jpg" },
    { title: "Acne & Scar Treatment", img: "/Images/Treatments/acne-scar.jpg" },
  ];

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate 10-digit mobile number
    if (!/^\d{10}$/.test(formData.number)) {
      setError("⚠️ Please enter a valid 10-digit mobile number.");
      setMessage("");
      return;
    }

    try {
      const res = await API.post("/users", formData);
      if (res.status === 200 || res.status === 201) {
        setMessage("✅ We will connect shortly!");
        setError("");
        setFormData({ name: "", number: "" });
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 px-6 md:px-20 poppins-regular">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-[#B91C1C] mb-12">
        Our Popular Treatments
      </h2>

      {/* Custom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl  mx-auto">
        <div className="flex flex-col gap-6">
          {treatments.filter((_, i) => i === 0 || i === 3).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div className="row-span-2 h-[420px]">
          <Card item={treatments[1]} big />
        </div>
        <div className="flex flex-col gap-6">
          {treatments.filter((_, i) => i === 2 || i === 4).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#008285] text-white px-6 py-3 rounded-lg font-medium shadow-md 
             hover:bg-white hover:text-[#B91C1C] hover:border hover:border-[#B91C1C] 
             hover:shadow-lg hover:scale-105
             transition-all duration-300 ease-in-out"
        >
          Book Your Free Consultation
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center poppins-regular bg-black/50 z-50">
          <div className="bg-white w-[95%] md:w-[550px] p-10 shadow-2xl relative">
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border p-2 text-md rounded-md"
                required
              />
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Phone"
                className="border p-2 text-md rounded-md"
                required
              />

              {/* Error & Success Messages */}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {message && <p className="text-green-600 text-sm">{message}</p>}

              <div className="flex justify-center mt-4">
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

// ✅ Updated Card Component (no triangle, clean text overlay)
const Card = ({ item, big }) => (
  <div
    className={`relative rounded-xl overflow-hidden shadow-lg group ${big ? "h-full" : "h-48"}`}
  >
    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    {/* Dark gradient overlay for better text visibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
      <h3 className="text-white text-lg font-bold px-3">{item.title}</h3>
    </div>
  </div>
);

export default PopularTreatments;
