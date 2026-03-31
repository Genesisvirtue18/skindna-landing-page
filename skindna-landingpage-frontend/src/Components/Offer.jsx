import React from "react";

const ExclusiveOffer = () => {
  return (
    <section className="py-12 px-6 bg-white poppins-regular">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl text-[#008285] font-bold text-#008285 mb-6">
          Exclusive Offer
        </h2>

        {/* Image */}
        <div className="mb-8">
          <img
            src="/Images/Offers/offer-banner.png" // 👈 replace with your image path
            alt="Exclusive Hair Offer"
            className="mx-auto shadow-lg w-full md:w-[80%] object-cover"
          />
        </div>

       
      </div>
    </section>
  );
};

export default ExclusiveOffer;
