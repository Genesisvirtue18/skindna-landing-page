import React from "react";

const SocialIcon = () => {
  return (
    <section className="py-12 bg-white poppins-regular">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-20">

        {/* Instagram */}
        <div className="flex-1 flex flex-col items-center text-center min-w-[80px]">
          <div className="rounded-full p-3 sm:p-4 bg-gray-100">
            <a href="https://www.instagram.com/theskindna/" target="_blank" rel="noopener noreferrer">
              <img
                src="/Images/Icon/instagram.png"
                alt="Instagram"
                className="h-10 w-10 sm:h-16 sm:w-16 object-contain"
              />
            </a>
          </div>
          <div className="h-1 w-12 bg-red-600 mt-2 mb-2 rounded"></div>
<p className="text-sm sm:text-lg font-semibold">Follow Us on Instagram</p>
        </div>

        {/* Google */}
        <div className="flex-1 flex flex-col items-center text-center min-w-[80px]">
          <div className="rounded-full p-3 sm:p-4 bg-gray-100">
            <a href="https://share.google/kwZYYQRYfiowwI93q" target="_blank" rel="noopener noreferrer">
              <img
                src="/Images/Icon/Google.png"
                alt="Google"
                className="h-10 w-10 sm:h-16 sm:w-16 object-contain"
              />
            </a>
          </div>
          <div className="h-1 w-12 bg-red-600 mt-2 mb-2 rounded"></div>
          <p className="text-sm sm:text-lg font-semibold">See Our Reviews</p>
        </div>

        {/* YouTube */}
        <div className="flex-1 flex flex-col items-center text-center min-w-[80px]">
          <div className="rounded-full p-3 sm:p-4 bg-gray-100">
            <a href="https://www.youtube.com/channel/UCpKWdQGMEaPoo-EnR8bBpPA" target="_blank" rel="noopener noreferrer">
              <img
                src="/Images/Icon/Youtube.png"
                alt="YouTube"
                className="h-10 w-10 sm:h-16 sm:w-16 object-contain"
              />
            </a>
          </div>
          <div className="h-1 w-12 bg-red-600 mt-2 mb-2 rounded"></div>
          <p className="text-sm sm:text-lg font-semibold">Watch & Subscribe</p>
        </div>

      </div>
    </section>
  );
};

export default SocialIcon;
