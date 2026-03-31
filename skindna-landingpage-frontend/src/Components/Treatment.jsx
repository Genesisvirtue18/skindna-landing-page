import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import API from "../api/axiousconfig"; // 👈 axios config

const treatmentsData = [
  {
    id: 1,
    name: "Scalp Restore Therapy",
    description:
      "Rebalance and renew with Scalp Restore Therapy, designed to nourish the scalp and revive healthy hair growth.",
    image: "/Images/Treatment/scalp-treatment.jpg",
    discount: "30% Off",
  },
  {
    id: 2,
    name: "Hair Loss Therapy",
    description:
      "Combat thinning and regain your confidence with our personalized Hair Loss Therapy for stronger, fuller hair.",
    image: "/Images/Treatment/hair-loss-treatment.jpg",
    discount: "30% Off",
  },
  {
    id: 3,
    name: "Dandruff Treatment",
    description:
      "Banish flakes and soothe your scalp with our effective anti-dandruff treatments for lasting clarity and comfort.",
    image: "/Images/Treatment/dandruff.jpg",
    discount: "30% Off",
  },
];

const HairTreatments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  // Form state
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const openModal = (treatment) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
    setError("");
    setMessage("");
    setFormData({ name: "", number: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate number
    if (!/^\d{10}$/.test(formData.number)) {
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
    <section className="py-12 px-6 bg-white poppins-regular">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#008285]">
          Hair Fall Treatments
        </h2>
      </div>

      {/* Treatments grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {treatmentsData.map((treatment) => (
          <div
            key={treatment.id}
            className="bg-gradient-to-b from-[#fce8e8] to-white shadow-md rounded-lg overflow-hidden text-center p-6"
          >
            <img
              src={treatment.image}
              alt={treatment.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Get{" "}
              <span className="text-[#008285] font-bold">{treatment.discount}:</span>{" "}
              {treatment.name}
            </h3>
            <p className="text-gray-700 mb-4 text-sm">{treatment.description}</p>
            <button
              onClick={() => openModal(treatment)}
              className="bg-[#008285] text-white px-6 py-2 rounded-md font-medium
             hover:bg-white hover:text-[#008285] hover:border hover:border-[#008285]
             hover:shadow-lg hover:scale-105
             transition-all duration-300 ease-in-out"
            >
              Book Your Free Consultation
            </button>

          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedTreatment && (
        <div className="fixed inset-0 flex items-center justify-center poppins-regular bg-black/50 z-50">
          <div className="bg-white w-[95%] md:w-[550px] p-10 shadow-2xl relative rounded-lg">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <IoClose size={28} />
            </button>

            <h2 className="text-center w-full text-3xl font-bold text-[#5C1C33] mb-6">
              Sign Up To Book {selectedTreatment.name}!
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

export default HairTreatments;
