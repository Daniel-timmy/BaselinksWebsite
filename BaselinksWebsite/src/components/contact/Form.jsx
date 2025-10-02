import React from "react";

const Form = () => {
  return (
    <div className="lg:bg-contact rounded-[20px] sm:h-fit lg:max-w-8/10 max-lg:py-4 max-lg:px-2  mt-20 sm:mt-30 flex max-sm:flex-col  max-sm:space-y-6  justify-between items-center gap-4">
      <div className=" space-y-8 justify-items-start sm:w-full lg:pl-10">
        <h2 className="font-medium text-black text-left text-2xl sm:text-4xl lg:text-5xl/6">
          Get in touch with us
        </h2>
        <div className="rounded-xl flex space-x-2 bg-white  text-black p-1 lg:p-3 items-center">
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

          <p className="text-[12px]/5 sm:text-[14px]/5 lg:text-[16px]/5">
            Hi, Need help location our office? Use the form below or email me us
            info@baselinksconsult.com.
          </p>
        </div>
        <div className="bg-white p-2 text-black text-left w-full text-xs rounded-xl">
          <form className="space-y-4">
            <div className="space-y-2 flex flex-col">
              <label className="font-lexend text-[10px] lg:text-[15px]">
                Name
              </label>
              <input
                placeholder="Full name"
                className="px-1 bg-input rounded-lg w-full h-11 lg:h-14 border-1 border-input-border"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="font-lexend text-[10px] lg:text-[15px]">
                Email
              </label>
              <input
                placeholder="Email address"
                className="px-1 bg-input rounded-lg w-full h-11 lg:h-14 border-1 border-input-border"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="font-lexend text-[10px] lg:text-[15px]">
                Message
              </label>
              <input
                placeholder="Enter your message"
                className="px-1 bg-input rounded-lg w-full h-11 lg:h-14 border-1 border-input-border"
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <button className=" bg-baselinks-teal text-white hover:opacity-70 cursor-pointer w-fit px-6 space-x-3 rounded-3xl font-bold text-md py-2.5 flex items-center gap-0">
                Send and Email{" "}
              </button>
              <button className=" bg-baselinks-teal-light text-baselinks-teal border-1 border-baselinks-teal/70 hover:opacity-70 cursor-pointer w-fit px-6 space-x-3 rounded-3xl font-bold text-md py-2.5 flex items-center gap-2">
                <svg
                  className="size-4"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.36058 14.2794C1.48099 12.9197 0.969727 11.2988 0.969727 9.55978C0.969727 4.75592 4.87018 0.855469 9.67404 0.855469C14.4779 0.855469 18.3784 4.75592 18.3784 9.55978C18.3784 14.3637 14.4779 18.2641 9.67404 18.2641C8.04588 18.2641 6.52216 17.8161 5.21835 17.0373L0.969727 18.4528L2.36058 14.2794Z"
                    fill="#F3F3F3"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.98935 13.5983C3.17756 12.4585 2.7002 11.0649 2.7002 9.56039C2.7002 5.71125 5.8255 2.58594 9.67464 2.58594C13.5238 2.58594 16.6491 5.71125 16.6491 9.56039C16.6491 13.4095 13.5238 16.5339 9.67464 16.5339C8.21782 16.5339 6.86544 16.0868 5.74579 15.3217L3.1235 16.1958L3.98935 13.5983Z"
                    fill="#00A82D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.57899 11.3699C6.54913 10.111 5.86195 8.56983 5.64663 6.8986C5.58891 6.43315 5.74375 5.96587 6.06902 5.62777C6.39428 5.28968 6.85516 5.11651 7.32244 5.15591L7.36734 5.16049C7.36734 5.16049 7.88135 5.29792 8.16263 5.37397C8.27442 5.40421 8.36329 5.48759 8.40086 5.59662C8.5273 5.97228 8.826 6.85462 8.9671 7.26968C9.01291 7.40437 8.97076 7.55372 8.86265 7.64534C8.64916 7.82492 8.29641 8.12179 8.07651 8.30779C7.95831 8.40766 7.92075 8.5735 7.98488 8.71368C8.24052 9.27076 8.5667 9.79118 8.95335 10.2621C9.351 10.7221 9.80821 11.1316 10.314 11.478C10.4423 11.565 10.6118 11.5559 10.73 11.456C10.9508 11.2709 11.3035 10.9741 11.5161 10.7945C11.6251 10.7028 11.779 10.6873 11.9046 10.7551C12.2894 10.964 13.1085 11.4074 13.4567 11.5962C13.5584 11.6512 13.6262 11.7538 13.6363 11.8683C13.6628 12.1588 13.7123 12.6883 13.7123 12.6883L13.7087 12.7332C13.6683 13.2005 13.42 13.6257 13.0316 13.8886C12.6431 14.1525 12.1565 14.2258 11.7076 14.0902C10.084 13.5908 8.67207 12.6416 7.60373 11.3992L7.57899 11.3699Z"
                    fill="#F3F3F3"
                  />
                </svg>
                WhatsApp Us{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full  justify-items-end">
        <iframe
          className="w-full sm:w-96 h-58  sm:h-120 lg:h-220 sm:rounded-r-3xl"
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d126857.48439694502!2d3.4919995!3d6.4840989!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8a1aa01d8b1ca665%3A0xd433654f7c6cbdc4!2sPalm%20City%20Estate%2C%206a%20d-sha%2C%20Lekki%2C%20Addo%20Rd%2C%20Ajah%2C%20Lagos%20101245!3m2!1d6.4841055!2d3.5744013999999997!5e0!3m2!1sen!2sng!4v1750688595791!5m2!1sen!2sng"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Form;
