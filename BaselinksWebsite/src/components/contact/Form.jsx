import React from "react";

const Form = () => {
  return (
    <div className="lg:bg-contact rounded-[20px] py-4 px-2">
      <div className="space-y-8">
        <h2 className="font-medium text-black text-left text-2xl">
          Get in touch with us
        </h2>
        <div className="rounded-2xl flex space-x-2 bg-white  text-black p-1 items-center">
          <div className="bg-baselinks-teal-light w-fit h-fit p-3 rounded-full">
            <svg
              className="size-7"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2234 9.58229C16.9553 6.83207 15.3294 2.50781 10.3047 2.50781C5.27987 2.50781 3.65394 6.83207 3.38585 9.58229C2.44533 9.93924 1.82495 10.8422 1.82912 11.8482V13.059C1.82912 14.3964 2.91332 15.4805 4.25069 15.4805C5.58809 15.4805 6.67229 14.3964 6.67229 13.059V11.8482C6.66791 10.8639 6.07036 9.9795 5.15878 9.60824C5.33176 8.01689 6.17933 4.23752 10.3047 4.23752C14.43 4.23752 15.2689 8.01689 15.4419 9.60824C14.5321 9.98031 13.9376 10.8653 13.937 11.8482V13.059C13.9389 13.5146 14.0688 13.9606 14.3119 14.346C14.5551 14.7313 14.9017 15.0406 15.3121 15.2384C14.9489 15.9216 14.0235 16.847 11.7489 17.1237C11.2943 16.4334 10.4146 16.1612 9.64945 16.4742C8.88434 16.7871 8.44761 17.5978 8.60717 18.4089C8.76674 19.2201 9.47797 19.8048 10.3047 19.8048C10.625 19.803 10.9385 19.7123 11.2103 19.5428C11.4821 19.3733 11.7015 19.1317 11.8441 18.8448C15.5543 18.421 16.7391 16.5097 17.111 15.3854C18.1171 15.0595 18.7937 14.1165 18.7801 13.059V11.8482C18.7843 10.8422 18.1639 9.93924 17.2234 9.58229ZM4.94258 13.059C4.94258 13.4411 4.63281 13.7508 4.25069 13.7508C3.86856 13.7508 3.55883 13.4411 3.55883 13.059V11.8482C3.55813 11.7569 3.57551 11.6663 3.60997 11.5818C3.64443 11.4972 3.69528 11.4203 3.7596 11.3555C3.82391 11.2907 3.90042 11.2393 3.98471 11.2042C4.069 11.1691 4.1594 11.151 4.25071 11.151C4.34201 11.151 4.43242 11.1691 4.51671 11.2042C4.60099 11.2393 4.6775 11.2907 4.74182 11.3555C4.80613 11.4203 4.85698 11.4972 4.89144 11.5818C4.9259 11.6663 4.94328 11.7569 4.94258 11.8482V13.059ZM15.6667 11.8482C15.6667 11.4661 15.9765 11.1563 16.3586 11.1563C16.7407 11.1563 17.0505 11.4661 17.0505 11.8482V13.059C17.0505 13.4411 16.7407 13.7508 16.3586 13.7508C15.9765 13.7508 15.6667 13.4411 15.6667 13.059V11.8482Z"
                fill="#025454"
              />
            </svg>
          </div>

          <p className="text-[12px]/5">
            Hi, Need help location our office? Use the form below or email me us
            info@baselinksconsult.com.
          </p>
        </div>
        <div className="bg-white p-2 text-black text-left text-xs rounded-xl">
          <form className="space-y-4">
            <div className="space-y-2 flex flex-col">
              <label className="font-lexend text-[10px]">Name</label>
              <input
                placeholder="Full name"
                className="px-1 bg-input rounded-lg w-full h-11 border-1 border-input-border"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="font-lexend text-[10px]">Email</label>
              <input
                placeholder="Email address"
                className="px-1 bg-input rounded-lg w-full h-11 border-1 border-input-border"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="font-lexend text-[10px]">Message</label>
              <input
                placeholder="Enter your message"
                className="px-1 bg-input rounded-lg w-full h-11 border-1 border-input-border"
              />
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Form;
