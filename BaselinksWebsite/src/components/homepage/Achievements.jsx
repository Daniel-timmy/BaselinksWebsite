import React from "react";
import { MESH } from "../../constants";

const Achievements = () => {
  return (
    <div className="flex max-lg:flex-col lg:p-8 p-4 lg:w-screen lg:justify-between lg:h-152 lg:min-w-5xl space-y-25">
      <div className="flex flex-col items-start justify-between h-full lg:w-140 space-y-8 sm:space-y-6 ">
        <h5 className="font-trajan text-black text-left sm:font-bold text-5xl/15 lg:text-6xl/20 ">
          Our Achieveme
          <br className="sm:hidden" />
          nts In Numbers
        </h5>
        <svg
          className="w-86 sm:w-96 lg:w-[449px]"
          height="302"
          viewBox="0 0 449 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clip-path="url(#clip0_5458_9409)">
            <path
              d="M377.453 272.499L278.856 267.591V3.99223L377.453 0.906128V272.499Z"
              fill="url(#paint0_linear_5458_9409)"
            />
            <path
              d="M449 266.621L377.453 272.499V0.90625L449 5.42893V266.621Z"
              fill="url(#paint1_linear_5458_9409)"
            />
            <path
              d="M225.876 285.79L130.687 279.066V118.74L225.876 121.77V285.79Z"
              fill="url(#paint2_linear_5458_9409)"
            />
            <path
              d="M309.139 277.945L225.876 285.79V121.77L309.139 119.847V277.945Z"
              fill="url(#paint3_linear_5458_9409)"
            />
            <path
              d="M130.687 118.74L221.223 114.399L309.14 119.847L224.884 123.299L130.687 118.74Z"
              fill="url(#paint4_linear_5458_9409)"
            />
            <path
              d="M91.1818 301.906L0 294.135V189.035L91.1818 195.735V301.906Z"
              fill="url(#paint5_linear_5458_9409)"
            />
            <path
              d="M189.297 292.799L91.1816 301.906V195.736L189.297 189.778V292.799Z"
              fill="url(#paint6_linear_5458_9409)"
            />
            <path
              d="M0 189.035L91.46 184.429L189.297 189.778L91.1818 195.736L0 189.035Z"
              fill="url(#paint7_linear_5458_9409)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_5458_9409"
              x1="645.715"
              y1="-3.35701"
              x2="324.448"
              y2="112.722"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5458_9409"
              x1="378.564"
              y1="76.9743"
              x2="509.096"
              y2="281.066"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_5458_9409"
              x1="528.692"
              y1="45.5501"
              x2="264.848"
              y2="140.881"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_5458_9409"
              x1="242.324"
              y1="161.456"
              x2="330.217"
              y2="298.874"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_5458_9409"
              x1="183.685"
              y1="52.4136"
              x2="235.067"
              y2="129.869"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_5458_9409"
              x1="456.346"
              y1="61.6656"
              x2="219.222"
              y2="147.342"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_5458_9409"
              x1="119.523"
              y1="214.714"
              x2="186.716"
              y2="319.77"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_5458_9409"
              x1="49.6953"
              y1="106.42"
              x2="104.016"
              y2="188.304"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D6AD5C" />
              <stop offset="1" stop-color="#CCE0E0" />
            </linearGradient>
            <clipPath id="clip0_5458_9409">
              <rect
                width="449"
                height="301"
                fill="white"
                transform="translate(0 0.906006)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="lg:pt-35 max-lg:grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 lg:hover:w-320  lg:w-fit sm:max-lg:pl-10 justify-items-center sm:justify-items-end">
        <div
          style={{
            backgroundImage: `url(${MESH})`,
          }}
          className="group font-trajan font-bold flex flex-col justify-between bg-no-repeat h-100 bg-baselinks-teal lg:bg-baselinks-teal-light lg:hover:bg-baselinks-teal max-lg:w-87 lg:w-38 lg:hover:w-87 rounded-3xl p-6 bg-center"
        >
          <svg
            className="group-hover:fill-white fill-white lg:fill-baselinks-teal "
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5629_1756)">
              <path
                d="M20.243 2.13742C21.4927 3.36503 21.7191 5.18527 21.5958 6.85828H39.0823C38.0222 -1.01902 48.6455 -0.9362 47.7308 6.85828C50.9792 7.05521 54.7081 6.14049 57.4707 8.25337C59.3424 9.68527 59.9148 11.6638 60.0713 13.935C60.9639 27.0061 59.3811 41.0804 60.0713 54.2564C59.867 58.1233 57.3989 60.6724 53.5375 60.9742H6.77433C2.85777 60.527 0.529547 57.746 0.240589 53.8883C0.835068 40.9515 -0.525055 27.3448 0.240589 14.4871C0.385988 12.0356 0.912369 9.89877 2.92218 8.33435C5.65899 6.20122 9.69151 7.03681 12.9492 6.85644C11.7473 2.57178 16.9578 -1.0908 20.2449 2.13742H20.243ZM18.7743 13.2356C19.1148 12.8785 19.3338 12.2252 19.3891 11.7337C19.5363 10.4325 19.5676 6.18834 19.3449 4.96809C18.9234 2.64355 15.5332 2.56625 15.167 4.93681C14.9848 6.12024 14.9848 10.9074 15.167 12.0908C15.4265 13.7767 17.5964 14.4687 18.7743 13.2374V13.2356ZM42.8995 3.21411C41.8541 3.41472 41.2964 4.36257 41.1547 5.33987C40.9559 6.71288 40.9559 10.1491 41.1068 11.5497C41.4271 14.5478 45.0363 14.5092 45.4817 12.0577C45.697 10.8761 45.6805 6.53803 45.5295 5.2865C45.3786 4.03497 44.2338 2.95644 42.9013 3.21227L42.8995 3.21411ZM21.5976 9.06503V12.1018C21.5976 13.3773 20.3627 15.0742 19.2087 15.6025C15.7743 17.1742 12.9032 14.6454 12.7559 11.1742C12.7375 10.7601 13.2142 9.24908 12.651 9.09632C9.80378 9.21411 4.71114 8.19816 3.15593 11.3307C3.06574 11.511 2.64059 12.7478 2.64059 12.8399V19.9258H57.8553V13.208C57.8553 13.0994 57.5277 11.9675 57.4504 11.7724C55.9302 7.96073 50.9167 9.31349 47.7326 9.06687V12.2877C47.7326 12.3798 47.3075 13.6166 47.2173 13.7969C45.8056 16.6368 41.3332 16.8006 39.6639 14.0969C39.5203 13.865 39.0823 12.8399 39.0823 12.654V9.3411L38.8062 9.06503H21.5976ZM57.8553 22.3166H2.64059V55.1693C2.64059 55.3994 3.17249 56.5902 3.34182 56.8607C4.10378 58.0865 5.59642 58.5926 6.96942 58.7546C22.897 58.6147 38.8799 59.0546 54.7762 58.5301C56.3148 58.1196 57.8572 56.211 57.8572 54.6172V22.3166H57.8553Z"
                // fill="#FBFBFB "
              />
            </g>
            <defs>
              <clipPath id="clip0_5629_1756">
                <rect
                  width="60"
                  height="60"
                  fill="white"
                  transform="translate(0 0.906006)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="space-y-4 text-left lg:text-baselinks-teal group-hover:lg:text-white">
            <h1 className="text-7xl/25 ">15+</h1>
            <h5 className="text-[32px]/10 lg:hidden group-hover:lg:block">
              Years of experience
            </h5>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${MESH})`,
          }}
          className="group font-trajan font-bold flex flex-col justify-between bg-no-repeat h-100 bg-baselinks-yellow lg:bg-baselinks-yellow-light lg:hover:bg-baselinks-yellow w-87 lg:w-38 lg:hover:w-87 rounded-3xl p-6 bg-center"
        >
          <svg
            className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5629_1915)">
              <path
                d="M47.7885 8.47206H51.9208C53.6649 8.47206 56.0831 10.767 56.0514 12.6062L56.0602 56.3918C55.7716 58.4509 54.4323 60.1106 52.396 60.6403C40.3861 61.1648 28.2672 60.723 16.2186 60.8656C14.2897 61.0046 11.3788 58.6463 11.3788 56.7368V53.8364C8.53292 53.9033 5.21895 54.1496 3.71772 51.2088C3.02782 49.8554 3.32701 48.7853 3.30237 47.4196C3.10526 36.0838 3.09118 24.5087 3.10702 13.1394C3.1123 8.91557 1.86274 1.41645 7.76911 0.906067L43.4801 0.911347C45.4988 1.10142 47.7885 3.36647 47.7885 5.39568V8.47206ZM7.46288 3.23799C6.06196 3.69734 5.51462 4.87122 5.39318 6.26862V48.4791C5.4935 49.6354 5.86837 50.7846 7.02993 51.2387L43.7107 51.2545C44.6575 50.9835 45.5217 49.8272 45.5076 48.8311L45.3809 5.34113C45.0236 4.10212 44.1243 3.22215 42.7832 3.19223L7.46464 3.23975L7.46288 3.23799ZM13.6667 53.8346C13.5875 55.5893 13.5347 57.761 15.5234 58.3964L51.4016 58.4157C52.4259 58.3876 53.3921 57.5938 53.6473 56.6171L53.6297 12.3915C53.5224 11.904 52.0951 10.76 51.7448 10.76H47.7867V49.528C47.7867 51.5097 44.8564 53.8364 42.9504 53.8364H13.6667V53.8346Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
              <path
                d="M10.9779 10.6193L22.3771 10.5789C23.2676 10.6053 23.7762 11.4447 23.873 12.249C24.1687 14.6989 24.1089 20.8217 23.8766 23.3384C23.7921 24.2589 23.3556 24.889 22.3771 25.0051C18.9293 24.7464 15.024 25.336 11.6361 25.0104C10.2951 24.8819 9.90612 24.2976 9.79172 22.9865C9.56821 20.4363 9.51717 14.7499 9.79876 12.2543C9.88852 11.4659 10.1877 10.8798 10.9797 10.6211L10.9779 10.6193ZM21.5816 12.8685H12.0849V22.7154H21.5816V12.8685Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
              <path
                d="M10.8035 29.7849L40.1417 29.7444C41.5514 29.7673 41.7767 31.8563 40.323 32.0429H10.9319C9.57854 31.7507 9.43071 30.2301 10.8035 29.7849Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
              <path
                d="M10.6258 37.1682L40.14 37.1277C41.5726 37.1242 41.6993 39.2431 40.3213 39.4262H10.932C9.69476 39.266 9.53813 37.6962 10.6258 37.1682Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
              <path
                d="M27.6075 23.3715C26.7399 22.5496 27.4615 21.4268 28.5262 21.3036C32.1535 20.8812 36.5868 21.6168 40.3038 21.3177C41.6325 21.5253 41.6589 23.4542 40.3231 23.6021C36.5058 23.3363 32.2908 23.9224 28.5227 23.6003C28.2341 23.5757 27.824 23.5774 27.6075 23.3715Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
              <path
                d="M27.6074 16.339C26.8049 15.5787 27.435 14.2745 28.5261 14.271C32.1833 14.5544 36.3702 13.905 39.9622 14.2745C41.8049 14.4646 41.6887 16.383 40.1418 16.5625C36.3843 16.3126 32.2308 16.8845 28.5226 16.566C28.234 16.5413 27.8239 16.5431 27.6074 16.3372V16.339Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
              <path
                d="M19.0721 15.5329C18.0214 15.7036 16.6662 17.9053 16.3706 17.9546C15.8725 17.8332 15.6631 17.2137 15.121 17.1151C14.3009 16.9655 13.4473 17.805 13.7975 18.6199C13.8873 18.8293 15.429 20.4308 15.6068 20.5136C16.0063 20.6984 16.3987 20.6332 16.7912 20.4713C17.0165 20.378 19.9943 17.4741 20.0858 17.2612C20.4167 16.4886 20.0207 15.378 19.0738 15.5329H19.0721Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
              <path
                d="M19.0718 15.5329C20.0186 15.378 20.4146 16.4886 20.0837 17.2612C19.994 17.4724 17.0144 20.378 16.7891 20.4713C16.3984 20.6332 16.006 20.6984 15.6047 20.5136C15.4269 20.4326 13.887 18.8311 13.7955 18.6199C13.4452 17.8032 14.3006 16.9655 15.1189 17.1151C15.661 17.2137 15.8704 17.8332 16.3685 17.9546C16.6642 17.9053 18.0211 15.7036 19.07 15.5329H19.0718Z"
                className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
              />
            </g>
            <defs>
              <clipPath id="clip0_5629_1915">
                <rect
                  width="60"
                  height="60"
                  className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
                  transform="translate(0 0.906006)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="space-y-4 text-left lg:text-baselinks-teal group-hover:lg:text-white">
            <h1 className="text-7xl/25 ">60+</h1>
            <h5 className="text-[32px]/10 lg:hidden group-hover:lg:block">
              Projects Completed
            </h5>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${MESH})`,
          }}
          className="group font-trajan font-bold flex flex-col justify-between bg-no-repeat h-100 bg-baselinks-teal lg:bg-baselinks-teal-light lg:hover:bg-baselinks-teal w-87 lg:w-38 lg:hover:w-87 rounded-3xl p-6 bg-center"
        >
          <svg
            width="60"
            height="61"
            className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5629_1235)">
              <path d="M46.8047 4.62305H55.7405C56.2916 4.62305 57.0811 5.66228 57.1987 6.2246C57.6966 8.59792 56.2593 13.6249 55.2523 15.8854C53.3849 20.081 49.2844 24.6794 44.9148 26.3148C44.1591 26.5984 42.1902 26.861 41.8196 27.0834C41.4491 27.3057 40.0183 29.2633 39.4012 29.816C38.0816 30.9954 35.2475 32.2231 34.6014 33.7103C34.0278 35.0347 34.1229 37.7496 34.603 39.1143C35.3281 41.1702 36.7443 40.9785 38.3201 41.9984C39.5962 42.8233 40.4259 43.9721 40.7015 45.4915C42.4206 45.5463 44.6618 45.0371 44.8793 47.3508C45.0888 49.5663 44.7086 52.1104 44.8713 54.3612C47.8649 53.9826 48.2097 56.1932 47.931 58.6261C47.5958 61.5601 43.2649 60.7916 41.0817 60.8061C36.066 60.8367 30.9053 60.6836 25.9524 60.6707C22.3771 60.6611 18.5892 61.1058 15.0058 60.798C13.9698 60.7094 12.8839 60.5112 12.5826 59.356C12.2651 58.1363 12.2523 55.2007 13.6347 54.6045C14.2872 54.3226 15.4247 54.6206 15.5424 54.2565C15.7438 52.083 15.3587 49.6565 15.5617 47.5152C15.8002 44.984 17.5242 45.6284 19.4415 45.4383C20.0376 42.4818 22.1628 42.1563 24.2445 40.9044C26.0104 39.8426 26.3584 37.3935 26.1748 35.4681C25.8171 31.7221 23.2842 32.0282 20.9657 30.0512C20.2922 29.4776 18.7277 27.2219 18.4619 27.0818C18.0494 26.8643 16.8136 26.7821 16.2094 26.5968C8.5368 24.2428 3.27457 15.3602 3.00228 7.60702C2.97005 6.68057 3.26974 4.62144 4.53777 4.62144H13.3124V2.28679C13.3124 1.86949 14.2437 0.973652 14.7529 0.989765L45.1146 0.920482C45.7204 0.770639 46.8047 1.82276 46.8047 2.2884V4.62305ZM44.7118 3.17457H15.5681C15.4199 10.4653 15.8678 18.987 19.9442 25.2788C21.9711 28.4078 23.4292 28.5947 26.0201 30.6329C28.7591 32.7871 28.9831 38.3538 27.193 41.1138C25.7736 43.3019 22.7767 43.0392 21.8486 45.5092H38.4329C38.022 43.3953 35.5005 43.376 34.0987 42.195C31.7689 40.2309 31.4885 35.4552 32.5584 32.7951C33.4011 30.7006 35.8968 29.8466 37.5419 28.4416C44.3412 22.6348 44.7295 11.4578 44.7118 3.17457ZM13.314 6.87553H5.26281C5.25153 13.1512 8.45946 19.8377 13.9086 23.1021C14.1084 23.2213 17.1777 24.8486 17.0166 24.3411C14.1567 19.0692 13.5171 12.7935 13.314 6.87553ZM55.0171 6.87553H46.8047C46.8756 11.3176 46.2618 15.7646 45.0759 20.0359L43.2633 24.5812C50.4203 22 54.9978 14.3483 55.0155 6.87553H55.0171ZM42.6188 47.6006H17.8222V54.2807C18.0462 54.6464 18.1686 54.3612 18.225 54.3612H42.6188V47.6006ZM45.6785 56.6137H14.7625V58.5455H45.2757C45.3756 58.5455 45.519 58.4183 45.6769 58.5455V56.6121L45.6785 56.6137Z" />
            </g>
            <defs>
              <clipPath id="clip0_5629_1235">
                <rect
                  width="60"
                  height="60.0007"
                  fill="white"
                  transform="translate(0 0.906006)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="space-y-4 text-left lg:text-baselinks-teal group-hover:lg:text-white">
            <h1 className="text-7xl/25 ">8x</h1>
            <h5 className="text-[32px]/10 lg:hidden group-hover:lg:block">
              Award Winner
            </h5>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${MESH})`,
          }}
          className="group font-trajan font-bold flex flex-col justify-between bg-no-repeat h-100 bg-baselinks-yellow lg:bg-baselinks-yellow-light lg:hover:bg-baselinks-yellow w-87 lg:w-38 lg:hover:w-87 rounded-3xl p-6 bg-center"
        >
          <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.4046 29.4837C53.6882 30.1784 58.1683 34.7396 59.4488 39.8911C62.3707 51.6348 51.0881 61.6609 39.9606 57.0167C36.9243 55.75 34.757 53.4106 32.9555 50.7063C31.3108 51.4839 29.5289 52.0477 27.7225 52.3229C10.4996 54.9442 -2.86868 39.8463 0.64939 22.6941C3.76894 7.48679 20.3891 -0.534698 34.2556 5.82877C43.3431 9.99869 48.8554 19.3599 48.4046 29.4854V29.4837ZM43.4198 29.3262C44.1973 29.245 45.076 29.3842 45.8681 29.3262C46.2274 29.3262 46.1409 26.8309 46.1196 26.4213C45.1462 8.17984 22.8308 -0.655733 9.54908 11.5174C-5.7318 25.5227 4.58557 51.8487 25.627 50.3598C26.5482 50.2951 31.6097 49.292 32.0049 48.7117C32.2173 48.4 31.5345 46.5232 31.4414 45.9511C30.9253 42.7545 31.5215 39.3489 33.2168 36.6132C32.9359 36.3479 32.263 37.5267 32.0801 37.6942C28.2321 41.2258 22.661 41.6967 18.2136 38.9991C17.2173 38.3939 14.2055 36.1274 14.7298 34.8374C15.5987 32.6969 17.624 35.7692 18.4488 36.4424C21.7725 39.1499 27.1247 39.1234 30.357 36.2766C30.9368 35.7659 31.7567 34.3931 32.3953 34.1958C33.3671 33.8957 33.6317 35.0198 33.9436 34.9518C36.1453 32.1946 39.861 29.6943 43.4182 29.3245L43.4198 29.3262ZM43.7939 31.528C40.4065 31.8978 37.1318 34.146 35.3727 37.0608C29.5714 46.6691 38.1199 58.5322 48.8521 55.5428C62.663 51.6962 59.697 29.7921 43.7955 31.528H43.7939Z"
              className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
            />
            <path
              d="M15.3829 21.746C19.3844 20.9966 19.9299 27.3468 15.9987 27.3501C12.6831 27.3535 12.3891 22.3065 15.3829 21.746Z"
              className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
            />
            <path
              d="M31.8695 21.746C35.7681 21.1043 36.0556 27.0267 32.6257 27.3302C29.1959 27.6336 28.732 22.2616 31.8695 21.746Z"
              className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
            />
            <path
              d="M51.7819 37.9648C52.5234 37.8272 53.4446 38.6495 53.0428 39.4222L45.0333 49.6803C44.6429 50.0368 44.3522 50.2872 43.7838 50.1678C42.8332 49.9688 39.5863 45.3695 38.5655 44.5222C38.0445 43.6534 39.1094 42.6835 39.9554 42.9355C40.7084 43.161 43.462 47.3044 44.0484 47.2016L50.7611 38.7639C51.0208 38.492 51.4095 38.0328 51.7819 37.9631V37.9648Z"
              className="group-hover:fill-white fill-white lg:fill-baselinks-teal"
            />
          </svg>

          <div className="space-y-4 text-left lg:text-baselinks-teal group-hover:lg:text-white">
            <h1 className="text-7xl/25 ">98%</h1>
            <h5 className="text-[32px]/10 lg:hidden group-hover:lg:block">
              Satisfied Clients
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
