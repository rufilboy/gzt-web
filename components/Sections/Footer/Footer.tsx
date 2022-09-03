import Link from "next/link";
import React from "react";
import { NavLinks, NavLinksType } from "../Navbar/Navbar";

const Footer = () => {
    return (
        <footer className="container py-4 space-y-10">
            <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 justify-between border-b border-gray-200 pb-10">
                <div className="space-y-10 w-full md:w-1/4">
                    <svg width="87" height="50" viewBox="0 0 87 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.2764 38.4223H19.6758L19.6658 46.8147C19.6651 47.3347 19.2444 47.7559 18.7256 47.7559C18.2059 47.7559 17.7847 47.3333 17.7854 46.8123L17.7954 38.4223H16.8105C16.2912 38.4223 15.8703 38.0004 15.8703 37.48C15.8703 36.9595 16.2912 36.5376 16.8105 36.5376H17.7954L17.815 31.8667C17.8173 31.3478 18.2376 30.9283 18.7552 30.9283C19.2761 30.9283 19.6978 31.3527 19.6955 31.8748L19.6758 36.5376H21.2764C21.7957 36.5376 22.2167 36.9595 22.2167 37.48C22.2167 38.0004 21.7957 38.4223 21.2764 38.4223Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M25.9533 41.3505H31.8295C32.2821 41.3505 32.5968 40.9029 32.4499 40.474C32.3483 40.1776 32.2092 39.896 32.0326 39.6284C31.6892 39.1088 31.2528 38.6916 30.7231 38.3778C30.1932 38.0633 29.6149 37.9062 28.9882 37.9062C28.3613 37.9062 27.7865 38.0598 27.2645 38.3662C26.7419 38.673 26.3111 39.0861 25.9718 39.6061C25.7474 39.9491 25.5794 40.3193 25.4676 40.7161C25.3778 41.0346 25.6231 41.3505 25.9533 41.3505ZM28.9882 48.0479C27.9585 48.0479 27.0199 47.7823 26.1731 47.2512C25.3262 46.7203 24.6509 46.008 24.1472 45.1143C23.6436 44.2205 23.3918 43.2313 23.3918 42.147C23.3918 41.3243 23.5372 40.5556 23.8283 39.8415C24.1192 39.1274 24.5202 38.4993 25.0316 37.9568C25.5426 37.4148 26.1375 36.9903 26.8167 36.6835C27.4956 36.3771 28.2195 36.2236 28.9882 36.2236C29.8313 36.2236 30.6055 36.3938 31.3107 36.734C32.0158 37.0743 32.6202 37.5474 33.124 38.1533C33.6277 38.7591 34.0042 39.4621 34.2544 40.2625C34.2569 40.2704 34.2595 40.2783 34.2618 40.2864C34.6517 41.5532 33.6745 42.8312 32.3518 42.8312H26.0165C25.6846 42.8312 25.4382 43.1503 25.5319 43.4692C25.6446 43.8526 25.8078 44.2063 26.022 44.5308C26.3504 45.0283 26.77 45.4228 27.2814 45.7144C27.7923 46.0061 28.3613 46.1557 28.9882 46.1631C29.6598 46.1631 30.2679 45.9892 30.8127 45.6415C31.1924 45.3989 31.5215 45.0937 31.7998 44.7256C32.0292 44.422 32.4108 44.2761 32.7808 44.3629C33.4604 44.5224 33.7409 45.3349 33.3103 45.8853C32.9502 46.3457 32.5205 46.7504 32.0213 47.0997C31.1186 47.732 30.1076 48.0479 28.9882 48.0479Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M44.8635 45.1299L44.8726 45.1347C45.4409 45.4425 45.548 46.2299 45.0637 46.6588C44.7409 46.9443 44.3836 47.1943 43.9921 47.4082C43.2122 47.8345 42.3673 48.0479 41.4567 48.0479C40.427 48.0479 39.4886 47.7825 38.6419 47.2512C37.7949 46.7203 37.1197 46.008 36.6159 45.1143C36.1124 44.2205 35.8604 43.2313 35.8604 42.147C35.8604 41.3243 36.0059 40.5556 36.2968 39.8415C36.5879 39.1274 36.9889 38.4993 37.5001 37.9568C38.0113 37.4148 38.6062 36.9903 39.2857 36.6835C39.9644 36.3771 40.6882 36.2236 41.4567 36.2236C42.3673 36.2236 43.2122 36.4369 43.9921 36.8628C44.3868 37.0789 44.7469 37.3322 45.0718 37.6231C45.5529 38.0531 45.4455 38.8379 44.8779 39.1448C44.534 39.331 44.1043 39.2955 43.8127 39.0346C43.5572 38.8059 43.2758 38.6169 42.9681 38.4673C42.4756 38.2279 41.9719 38.1085 41.4567 38.1085C40.7627 38.1085 40.1342 38.2933 39.5708 38.6638C39.0073 39.0339 38.5616 39.5256 38.2332 40.1386C37.9048 40.7521 37.7408 41.4217 37.7408 42.147C37.7408 42.8724 37.9069 43.5402 38.239 44.1495C38.5708 44.7588 39.0186 45.2472 39.5821 45.6132C40.1453 45.9799 40.7704 46.1631 41.4567 46.1631C42.0091 46.1631 42.5275 46.036 43.0127 45.7818C43.2964 45.6329 43.5547 45.4585 43.7873 45.2588C44.089 44.9993 44.5134 44.9406 44.8635 45.1299Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M57.7871 40.7781V46.8133C57.7871 47.334 57.3662 47.7559 56.8471 47.7559H56.8469C56.3274 47.7559 55.9067 47.334 55.9067 46.8133V41.193C55.9067 40.625 55.7683 40.1087 55.4925 39.6448C55.2164 39.1812 54.8471 38.8129 54.3845 38.5401C53.9217 38.2671 53.4068 38.1305 52.8398 38.1305C52.2803 38.1305 51.767 38.2671 51.3007 38.5401C50.8342 38.8129 50.463 39.1812 50.187 39.6448C49.9109 40.1087 49.773 40.625 49.773 41.193V46.8133C49.773 47.334 49.352 47.7559 48.8328 47.7559C48.3137 47.7559 47.8925 47.334 47.8925 46.8133V31.8706C47.8925 31.3504 48.3137 30.9282 48.8328 30.9282C49.352 30.9282 49.773 31.3504 49.773 31.8706V37.3656C49.773 37.5581 50.0046 37.6518 50.1398 37.515C50.4642 37.1856 50.8421 36.9101 51.273 36.6888C51.8772 36.3785 52.5339 36.2231 53.2427 36.2231C54.0786 36.2231 54.8415 36.4272 55.5316 36.8347C56.2216 37.2425 56.7703 37.7901 57.1769 38.4782C57.5837 39.1664 57.7871 39.9327 57.7871 40.7781Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M58.8837 33.4909L60.3494 34.851C61.3021 35.7349 62.6528 36.0429 63.8932 35.6588L65.9092 35.0342C65.946 35.0229 65.9657 35.0755 65.931 35.0915L64.2063 35.8796C63.5725 36.1693 63.1661 36.8032 63.1668 37.5016L63.1726 42.4425L63.1828 49.3984L62.1572 43.206C62.1301 43.0436 61.9038 43.0267 61.8533 43.1835L60.2094 48.2928L60.6801 44.2219C60.8152 43.0534 60.8821 41.8777 60.8807 40.7016L60.8775 38.0543C60.8761 36.8027 60.441 35.5906 59.6468 34.6251L58.7883 33.5814C58.736 33.5178 58.8235 33.4353 58.8837 33.4909ZM62.0651 33.5106C61.7018 33.5106 61.3972 33.3926 61.1519 33.1556C60.9064 32.9187 60.784 32.6228 60.784 32.2677C60.784 31.9124 60.9064 31.6167 61.1519 31.3796C61.3972 31.1431 61.6971 31.0245 62.0512 31.0245C62.4059 31.0245 62.7058 31.1431 62.9511 31.3796C63.1964 31.6167 63.3191 31.9124 63.3191 32.2677C63.3191 32.6228 63.1985 32.9187 62.9576 33.1556C62.7169 33.3926 62.4196 33.5106 62.0651 33.5106Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M68.7834 41.3505H74.7394C75.0844 41.3505 75.3302 41.0193 75.2378 40.686C75.1342 40.3117 74.9733 39.9591 74.7551 39.6284C74.4117 39.1088 73.9753 38.6916 73.4453 38.3778C72.9154 38.0633 72.3373 37.9062 71.7105 37.9062C71.0836 37.9062 70.5092 38.0598 69.9867 38.3662C69.4644 38.673 69.0335 39.0861 68.694 39.6061C68.495 39.9106 68.3402 40.2363 68.2296 40.5832C68.109 40.962 68.3867 41.3505 68.7834 41.3505ZM71.7105 48.0479C70.6807 48.0479 69.7426 47.7823 68.8954 47.2512C68.0487 46.7203 67.3732 46.008 66.8694 45.1143C66.3661 44.2205 66.1141 43.2313 66.1141 42.147C66.1141 41.3243 66.2599 40.5556 66.5507 39.8415C66.8416 39.1274 67.2429 38.4993 67.7538 37.9568C68.265 37.4148 68.86 36.9903 69.5394 36.6835C70.2181 36.3771 70.942 36.2236 71.7105 36.2236C72.5537 36.2236 73.328 36.3938 74.0331 36.734C74.7382 37.0743 75.3427 37.5474 75.8462 38.1533C76.35 38.7591 76.7267 39.4621 76.9766 40.2625C76.9792 40.2704 76.9817 40.2783 76.984 40.2864C77.3742 41.5532 76.397 42.8312 75.0742 42.8312H68.8479C68.4501 42.8312 68.1706 43.2229 68.2958 43.6017C68.4055 43.9345 68.5552 44.2443 68.7445 44.5308C69.0726 45.0283 69.4924 45.4228 70.0036 45.7144C70.5145 46.0061 71.0836 46.1557 71.7105 46.1631C72.3822 46.1631 72.9902 45.9892 73.5351 45.6415C73.9149 45.3989 74.2439 45.0937 74.5223 44.7256C74.7516 44.422 75.1332 44.2761 75.5032 44.3629C76.1829 44.5224 76.4634 45.3349 76.0327 45.8853C75.6726 46.3457 75.2429 46.7504 74.7438 47.0997C73.8408 47.732 72.8298 48.0479 71.7105 48.0479"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M82.6905 47.9692C82.0863 47.9465 81.4985 47.8326 80.9279 47.6269C80.3567 47.4216 79.8569 47.141 79.4279 46.7856C79.3413 46.7142 79.2596 46.6404 79.1828 46.5644C78.7438 46.1309 78.879 45.3908 79.4452 45.1465L79.467 45.137C79.797 44.9946 80.1795 45.0712 80.4289 45.3305C80.5106 45.4154 80.6041 45.4986 80.7094 45.5796C81.0005 45.8039 81.3363 45.9834 81.7167 46.1184C82.0974 46.2529 82.4815 46.3201 82.8696 46.3201C83.2801 46.3201 83.6645 46.2566 84.0225 46.1293C84.3807 46.0024 84.6734 45.8136 84.9014 45.5629C85.1288 45.3124 85.2425 45.0113 85.2425 44.6597C85.2425 44.2858 85.1175 43.9924 84.8676 43.7793C84.6174 43.5659 84.3041 43.3978 83.9274 43.2744C83.5504 43.151 83.1679 43.0332 82.7803 42.9209C82.0113 42.7265 81.3252 42.493 80.7205 42.2198C80.1161 41.9468 79.6405 41.5991 79.2934 41.1765C78.9465 40.7542 78.773 40.2138 78.773 39.5555C78.773 38.8599 78.965 38.2581 79.3494 37.7494C79.7338 37.2408 80.2392 36.8481 80.8661 36.5712C81.493 36.2947 82.1647 36.156 82.8807 36.156C83.7837 36.156 84.6082 36.3506 85.3545 36.7396C85.7391 36.94 86.073 37.1773 86.3565 37.4509C86.7647 37.8459 86.6721 38.5267 86.1827 38.8138C85.8471 39.0107 85.4172 38.9643 85.1441 38.6872C85.0782 38.6201 85.0067 38.5563 84.9291 38.4951C84.6679 38.2898 84.3694 38.1268 84.0338 38.0074C83.698 37.8877 83.3546 37.8241 83.0041 37.8167C82.5711 37.8016 82.1661 37.8578 81.7894 37.9849C81.4127 38.1122 81.1104 38.3045 80.8827 38.5624C80.6553 38.8207 80.5416 39.1404 80.5416 39.5217C80.5416 39.8958 80.6627 40.1801 80.9054 40.3745C81.1477 40.5688 81.465 40.7242 81.8565 40.8402C82.2485 40.9559 82.6757 41.0886 83.1385 41.2384C83.8172 41.4553 84.4513 41.7056 85.0409 41.9899C85.6305 42.2743 86.1061 42.6294 86.468 43.0554C86.8299 43.4817 87.007 44.0091 86.9998 44.6372C86.9998 45.3256 86.7945 45.9256 86.3842 46.438C85.9737 46.9501 85.4422 47.3409 84.7891 47.6099C84.1361 47.8794 83.4368 47.9989 82.6905 47.9692Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M16.7059 12.9901H22.251C22.6696 12.9901 22.9824 12.584 22.8545 12.1844C22.7513 11.8625 22.6043 11.5568 22.4139 11.268C22.0705 10.7485 21.6338 10.3312 21.1041 10.0174C20.5742 9.70315 19.9961 9.5459 19.3692 9.5459C18.7423 9.5459 18.1677 9.69944 17.6455 10.0061C17.1232 10.3127 16.692 10.726 16.3528 11.2458C16.2093 11.4652 16.0888 11.6959 15.9913 11.9374C15.7884 12.4407 16.1642 12.9901 16.7059 12.9901ZM19.3692 19.6875C18.3394 19.6875 17.4011 19.4217 16.5541 18.8908C15.7074 18.3599 15.0319 17.6476 14.5284 16.754C14.0246 15.8601 13.7728 14.8709 13.7728 13.7866C13.7728 12.9642 13.9184 12.1955 14.2093 11.4812C14.5004 10.767 14.9014 10.139 15.4126 9.59646C15.9235 9.05443 16.5187 8.62998 17.1979 8.32313C17.8769 8.01675 18.6007 7.86344 19.3692 7.86344C20.2125 7.86344 20.9868 8.03345 21.6916 8.3737C22.397 8.71394 23.0014 9.18709 23.505 9.79291C24.0087 10.3987 24.3855 11.1017 24.6354 11.9019C24.6384 11.9116 24.6414 11.9211 24.6444 11.9307C25.0327 13.1956 24.058 14.471 22.7376 14.471H16.7735C16.2302 14.471 15.8513 15.0247 16.0608 15.527C16.1549 15.7532 16.269 15.9677 16.403 16.1704C16.7314 16.6677 17.1512 17.0625 17.6623 17.354C18.1733 17.6458 18.7423 17.7954 19.3692 17.8028C20.0408 17.8028 20.6489 17.6288 21.1939 17.2812C21.5736 17.0386 21.9027 16.7333 22.1808 16.3653C22.4104 16.0617 22.792 15.9158 23.1618 16.0025C23.8414 16.1621 24.1221 16.9743 23.6915 17.5249C23.3314 17.9853 22.9017 18.3901 22.4025 18.7396C21.4996 19.3716 20.4885 19.6875 19.3692 19.6875Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M9.36747 9.27594C9.33855 9.25066 9.30962 9.22538 9.28023 9.20079C8.92733 8.90252 8.38653 9.1551 8.38653 9.61805V10.3751C8.38653 10.7575 8.51357 11.1252 8.72763 11.4415C9.14277 12.0543 9.3802 12.7979 9.36701 13.5969C9.33484 15.5233 7.80153 17.1365 5.88292 17.2552C3.7211 17.389 1.92398 15.6711 1.92398 13.5331C1.92398 12.7042 2.19472 11.9372 2.65245 11.3172C2.89196 10.993 3.0308 10.6056 3.0308 10.2025V9.51715C3.0308 9.06047 2.50458 8.80836 2.14705 9.09178C0.77156 10.1812 -0.085347 11.8989 0.00675375 13.8138C0.148376 16.7561 2.58789 19.1302 5.52632 19.1914C6.99831 19.2223 8.3465 18.6876 9.36747 17.7903V42.0222C9.36747 43.9681 7.90913 45.6457 5.97456 45.8115C4.34035 45.9521 2.90168 45.0315 2.26854 43.662C2.11535 43.3301 1.7923 43.1109 1.4276 43.1109H1.40284C0.701212 43.1109 0.225898 43.8366 0.519787 44.4717C1.41626 46.4104 3.37491 47.7559 5.64665 47.7559C7.07167 47.7559 8.3745 47.2263 9.36747 46.3536C10.5481 45.3152 11.2933 43.7937 11.2933 42.0966V13.5331C11.2933 11.8358 10.5481 10.3145 9.36747 9.27594Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M36.9508 12.8215V18.4443C36.9508 18.9697 36.5262 19.3955 36.002 19.3955H35.9634C35.4395 19.3955 35.0146 18.9697 35.0146 18.4443V12.9257C35.0146 11.1057 33.5269 9.63544 31.717 9.78805C30.1601 9.9191 28.9378 11.227 28.9378 12.8215V18.461C28.9378 18.9771 28.5203 19.3955 28.0054 19.3955C27.4815 19.3955 27.0567 18.9697 27.0567 18.4443V12.8215C27.0567 11.2432 27.7914 9.83746 28.9378 8.93175C29.781 8.26099 30.8465 7.8623 32.0044 7.8623C33.1372 7.8623 34.1818 8.2436 35.0146 8.88884C36.1918 9.79246 36.9508 11.2175 36.9508 12.8215Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M44.1565 17.1231H58.0526C58.5258 17.1231 58.9092 17.594 58.9092 18.175C58.9092 18.7557 58.5258 19.2266 58.0526 19.2266H41.8007C40.9119 19.2266 40.4428 17.9345 41.0373 17.1231L50.918 3.63285C51.2091 3.23555 51.6965 3.16921 52.0512 3.47885C52.4687 3.84299 52.5344 4.57219 52.1921 5.03954L43.8864 16.3793C43.6763 16.6662 43.8422 17.1231 44.1565 17.1231Z"
                            fill="#5D5CD6"
                        />
                        <path
                            d="M55.5246 2.10374H42.2783C41.8053 2.10374 41.4216 1.63291 41.4216 1.05191C41.4216 0.470911 41.8053 8.17944e-05 42.2783 8.17944e-05H57.8806C58.7692 8.17944e-05 59.2383 1.29243 58.6438 2.10374L48.7631 15.5938C48.472 15.9913 47.9846 16.0574 47.6299 15.7478C47.2124 15.3839 47.1467 14.6545 47.4889 14.1873L55.7947 2.84755C56.0048 2.56065 55.8389 2.10374 55.5246 2.10374Z"
                            fill="#5D5CD6"
                        />
                        <path d="M5.64701 13.7754C6.04781 13.7754 6.37294 13.4495 6.37294 13.0476V5.91255C6.37294 5.51061 6.04781 5.18497 5.64701 5.18497C5.24598 5.18497 4.92108 5.51061 4.92108 5.91255V13.0476C4.92108 13.4495 5.24598 13.7754 5.64701 13.7754Z" fill="#5D5CD6" />
                    </svg>
                    <h1 className="text-gray-500">Genz Techies is nonprofit. Registered as a 501(c)(3) charitable organisation under U.S. federal law (c)</h1>
                </div>
                <div className="space-y-10">
                    <h1 className="font-bold text-primary text-lg uppercase">quick links</h1>
                    <ul className="space-y-2">
                        {NavLinks.map((link: NavLinksType, index: number) => (
                            <li key={link.title}>
                                <Link href={link.url}>
                                    <a>
                                        <button className="btn btn-ghost capitalize hover:bg-transparent">{link.title}</button>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-10">
                    <h1 className="font-bold text-primary text-lg uppercase">Connect</h1>
                    <div className="flex flex-col space-y-2">
                        <Link href="#">
                            <a>
                                <button className="btn btn-ghost text-primary capitalize hover:bg-transparent gap-2">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3571 1.64258H5.49998C3.33029 1.64258 1.57141 3.40146 1.57141 5.57115V13.4283C1.57141 15.598 3.33029 17.3569 5.49998 17.3569H13.3571C15.5268 17.3569 17.2857 15.598 17.2857 13.4283V5.57115C17.2857 3.40146 15.5268 1.64258 13.3571 1.64258Z" fill="#5D5CD6" stroke="#EFEFFB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M12.6803 9.18186C12.7773 9.83576 12.6656 10.5036 12.3611 11.0904C12.0567 11.6771 11.5749 12.153 10.9844 12.4502C10.394 12.7474 9.72481 12.8508 9.07214 12.7458C8.41948 12.6408 7.81655 12.3326 7.34911 11.8652C6.88168 11.3978 6.57353 10.7948 6.46851 10.1422C6.36349 9.4895 6.46693 8.82034 6.76414 8.22986C7.06134 7.63938 7.53717 7.15765 8.12394 6.85319C8.71071 6.54872 9.37855 6.43703 10.0325 6.534C10.6995 6.63291 11.317 6.94372 11.7938 7.42052C12.2706 7.89733 12.5814 8.51484 12.6803 9.18186Z"
                                            fill="#5D5CD6"
                                            stroke="#EFEFFB"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M13.75 5.17871H13.7579" stroke="#EFEFFB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <span>Instagram</span>
                                </button>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <button className="btn btn-ghost text-primary capitalize hover:bg-transparent gap-2">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.6429 0.928799C17.8905 1.45953 17.0574 1.86546 16.1758 2.13094C15.7025 1.58684 15.0737 1.2012 14.3741 1.02617C13.6746 0.85114 12.9382 0.895167 12.2645 1.1523C11.5908 1.40943 11.0124 1.86726 10.6074 2.46386C10.2024 3.06047 9.99037 3.76706 10 4.48809V5.2738C8.61925 5.3096 7.25104 5.00337 6.01726 4.38236C4.78348 3.76136 3.72243 2.84487 2.92861 1.71451C2.92861 1.71451 -0.214251 8.78594 6.85718 11.9288C5.23902 13.0272 3.31137 13.578 1.35718 13.5002C8.42861 17.4288 17.0715 13.5002 17.0715 4.46451C17.0707 4.24566 17.0497 4.02734 17.0086 3.81237C17.8105 3.02154 18.3764 2.02307 18.6429 0.928799Z"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span>Twitter</span>
                                </button>
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <button className="btn btn-ghost text-primary capitalize hover:bg-transparent gap-2">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_302_377)">
                                            <path
                                                d="M0 1.646C0 1.013 0.526 0.5 1.175 0.5H14.825C15.474 0.5 16 1.013 16 1.646V15.354C16 15.987 15.474 16.5 14.825 16.5H1.175C0.526 16.5 0 15.987 0 15.354V1.646ZM4.943 13.894V6.669H2.542V13.894H4.943ZM3.743 5.682C4.58 5.682 5.101 5.128 5.101 4.434C5.086 3.725 4.581 3.186 3.759 3.186C2.937 3.186 2.4 3.726 2.4 4.434C2.4 5.128 2.921 5.682 3.727 5.682H3.743V5.682ZM8.651 13.894V9.859C8.651 9.643 8.667 9.427 8.731 9.273C8.904 8.842 9.299 8.395 9.963 8.395C10.832 8.395 11.179 9.057 11.179 10.029V13.894H13.58V9.75C13.58 7.53 12.396 6.498 10.816 6.498C9.542 6.498 8.971 7.198 8.651 7.691V7.716H8.635C8.64031 7.70765 8.64564 7.69932 8.651 7.691V6.669H6.251C6.281 7.347 6.251 13.894 6.251 13.894H8.651Z"
                                                fill="#5D5CD6"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_302_377">
                                                <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span>LinkedIn</span>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="space-y-10 w-full md:w-2/5">
                    <h1 className="font-bold text-primary text-xl uppercase">Subscribe to our Newsletter</h1>
                    <div className="form-control border-none ring-0 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <div className="flex space-x-3">
                            <input type="text" placeholder="johndoe@mail.com" className="input border border-primary" />
                            <button className="btn bg-primary hover:opacity-80 hover:bg-primary text-white border-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-500">GenzTechies | All Rights Reserved — @{new Date().getFullYear()}</p>
                <p className="text-gray-500">Brand Guide | The Press </p>
            </div>
        </footer>
    );
};

export default Footer;
