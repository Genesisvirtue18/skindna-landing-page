import React from "react";

export default function Testimonial() {
  return (
    <div className="px-6 py-10 bg-white poppins-regular">
      {/* Video Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 justify-items-center">
        <div className="w-full max-w-sm">
          <iframe
            className="w-full h-48 md:h-56 rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/ApsjIH91ZwQ"
            title="Winter Dandruff Trouble?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full max-w-sm">
          <iframe
            className="w-full h-48 md:h-56 rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/YjbtzRQhMdw"
            title="How to choose best hair growth treatment"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full max-w-sm">
          <iframe
            className="w-full h-48 md:h-56 rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/XpuvP6O7Hhc"
            title="Dandruff isn’t just dryness"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Testimonials Section */}
      <h2 className="text-center text-3xl font-semibold text-[#008285] mb-8">
        What Our Patients Say
      </h2>

      {/* Testimonials Grid */}
      <div className="testimonials-grid grid gap-6 poppins-regular grid-cols-1 md:grid-cols-3">
        {/* Testimonial Card */}
        <div className="testimonial-card bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div className="reviewer-info flex items-center mb-4">
            <div className="avatar w-10 h-10 rounded-full bg-[#99573a] text-white flex items-center justify-center font-bold mr-2">
              M
            </div>
            <div className="reviewer-name font-semibold text-gray-800">
              Mehak Dahiya
            </div>
          </div>
          <div className="review-text text-gray-600 text-sm mb-2">
            Absolutely the best dermatology clinic! 🌟
            Dr. Mayuri is experienced, listens carefully, and gives effective treatment. The staff is polite, and the clinic is clean and professional. My skin has improved so much—highly recommend! 👏✨
          </div>
          <div className="review-footer flex items-center justify-between">
            <div className="stars text-yellow-400">★★★★★</div>
            <img
              src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"
              className="google-logo w-5 ml-2"
              alt="Google Logo"
            />
          </div>
        </div>


        <div className="testimonial-card bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div className="reviewer-info flex items-center mb-4">
            <div className="avatar w-10 h-10 rounded-full bg-[#99573a] text-white flex items-center justify-center font-bold mr-2">
              S
            </div>
            <div className="reviewer-name font-semibold text-gray-800">
              Sahnu Gujar
            </div>
          </div>
          <div className="review-text text-gray-600 text-sm mb-2">
            She is the best dermatologist available in Delhi,
            She made my skin soo good and best of all time,
            Highly recommended.
            Thankyou mam
            You are the best
          </div>
          <div className="review-footer flex items-center justify-between">
            <div className="stars text-yellow-400">★★★★★</div>
            <img
              src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"
              className="google-logo w-5 ml-2"
              alt="Google Logo"
            />
          </div>
        </div>

        <div className="testimonial-card bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div className="reviewer-info flex items-center mb-4">
            <div className="avatar w-10 h-10 rounded-full bg-[#99573a] text-white flex items-center justify-center font-bold mr-2">
              K
            </div>
            <div className="reviewer-name font-semibold text-gray-800">
              Kunal Sen
            </div>
          </div>
          <div className="review-text text-gray-600 text-sm mb-2">
            She treated my skin pigmentation so well, cleared my skin completely
            I look young again
            Best dermatologist in delhi
          </div>
          <div className="review-footer flex items-center justify-between">
            <div className="stars text-yellow-400">★★★★★</div>
            <img
              src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"
              className="google-logo w-5 ml-2"
              alt="Google Logo"
            />
          </div>
        </div>


        <div className="testimonial-card bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div className="reviewer-info flex items-center mb-4">
            <div className="avatar w-10 h-10 rounded-full bg-[#99573a] text-white flex items-center justify-center font-bold mr-2">
              D
            </div>
            <div className="reviewer-name font-semibold text-gray-800">
              Dr. Pooja Sangwan

            </div>
          </div>
          <div className="review-text text-gray-600 text-sm mb-2">
            Pigmented skin... now there is lot of improvement in my skin texture after getting services from Dr Mayuri Jain
          </div>
          <div className="review-footer flex items-center justify-between">
            <div className="stars text-yellow-400">★★★★★</div>
            <img
              src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"
              className="google-logo w-5 ml-2"
              alt="Google Logo"
            />
          </div>
        </div>

        <div className="testimonial-card bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div className="reviewer-info flex items-center mb-4">
            <div className="avatar w-10 h-10 rounded-full bg-[#99573a] text-white flex items-center justify-center font-bold mr-2">
              S
            </div>
            <div className="reviewer-name font-semibold text-gray-800">
              Silky Chadha
            </div>
          </div>
          <div className="review-text text-gray-600 text-sm mb-2">
            Exceptional care from Dr Mayuri Friendly staff, efficient service, and top-notch expertise. I'm so impressed!"
          </div>
          <div className="review-footer flex items-center justify-between">
            <div className="stars text-yellow-400">★★★★★</div>
            <img
              src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"
              className="google-logo w-5 ml-2"
              alt="Google Logo"
            />
          </div>
        </div>

          <div className="testimonial-card bg-white rounded-lg p-6 shadow-md flex flex-col justify-between">
          <div className="reviewer-info flex items-center mb-4">
            <div className="avatar w-10 h-10 rounded-full bg-[#99573a] text-white flex items-center justify-center font-bold mr-2">
              D
            </div>
            <div className="reviewer-name font-semibold text-gray-800">
              Dhruv Kumar
            </div>
          </div>
          <div className="review-text text-gray-600 text-sm mb-2">
Dr Mayuri Jain is undoubtedly the best dermatologist in West Delhi! Her expertise and personalized approach make her stand out from the rest. I visited her clinic for acne scars treatment, and the results were beyond my expectations. I highly recommend Dr Jain for anyone seeking top-notch skincare solutions          </div>
          <div className="review-footer flex items-center justify-between">
            <div className="stars text-yellow-400">★★★★★</div>
            <img
              src="https://images.icon-icons.com/2699/PNG/512/google_logo_icon_169090.png"
              className="google-logo w-5 ml-2"
              alt="Google Logo"
            />
          </div>
        </div>

        {/* Add more testimonial cards here */}
      </div>
    </div>
  );
}
