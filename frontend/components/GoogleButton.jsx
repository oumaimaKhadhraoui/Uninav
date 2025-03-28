"use client"
import React, { useState } from "react";


const GoogleButton = () => {
  const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = () => {
        setIsLoading(true);
    };
 // Redirect to the backend's Google OAuth route
 window.location.href = "http://localhost:5000/auth/google";
    return (
        <button
            className={`flex w-full items-center justify-center gap-4 rounded-full border border-stroke bg-gray-2 p-[15px] font-medium hover:bg-opacity-50 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleSignIn}
            disabled={isLoading}
        >
      <span>
      <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isLoading ? "animate-spin" : ""}`}
        >
          <g clipPath="url(#clip0_1715_17244)">
            <path
                d="M19.999 10.2216C20.0111 9.53416 19.9387 8.84776 19.7834 8.17725H10.2031V11.8883H15.8266C15.7201 12.539 15.4804 13.1618 15.1219 13.7194C14.7634 14.2769 14.2935 14.7577 13.7405 15.1327L13.7209 15.257L16.7502 17.5567L16.96 17.5772C18.8873 15.8328 19.9986 13.266 19.9986 10.2216"
                fill="#4285F4"
            /><path
                d="M10.2016 19.9998C12.9566 19.9998 15.2695 19.1109 16.959 17.5775L13.739 15.133C12.8774 15.722 11.7209 16.1332 10.2016 16.1332C8.91122 16.1258 7.656 15.7203 6.61401 14.9744C5.57201 14.2285 4.79616 13.1799 4.39653 11.9775L4.27694 11.9875L1.12711 14.3764L1.08594 14.4886C1.93427 16.1455 3.23617 17.5384 4.84606 18.5117C6.45596 19.485 8.31039 20.0002 10.202 19.9998"
                fill="#34A853"
            /><path
                d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                fill="#FBBC05"
            /><path
                d="M10.202 3.86687C11.6641 3.84462 13.0783 4.37827 14.1476 5.35583L17.0274 2.60021C15.1804 0.902092 12.7344 -0.0296414 10.202 0.000207357C8.31041 -0.000233694 6.456 0.514977 4.8461 1.48823C3.23621 2.46148 1.93429 3.85441 1.08594 5.51125L4.38555 8.02249C4.78912 6.8203 5.56754 5.77255 6.61107 5.02699C7.6546 4.28143 8.9106 3.87565 10.202 3.86687Z"
                fill="#EB4335"/>
          </g>
          <defs>
            <clipPath id="clip0_1715_17244">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      {isLoading ? "Loading..." : `Google`}

            </button>
    );
};

export default GoogleButton;