import React from "react";
import Svg, { Path, Defs, Rect, G, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const BusIcon = ({ color }) => (
<Svg xmlns="http://www.w3.org/2000/svg" width="54" height="31" viewBox="0 0 54 31" fill="none">
  <G clip-path="url(#clip0_831_115)">
    <Path d="M53.6747 13.5044C53.6742 13.2097 53.6478 12.9102 53.5915 12.621C52.9182 9.16127 52.2383 5.70284 51.5571 2.24468C51.3477 1.18128 50.765 0.418907 49.6997 0.123386C49.3038 0.0136319 48.8705 0.00851183 48.4542 0.00824927C33.8837 0.00299789 19.3132 0.00391688 4.74265 0.00391688C4.07887 0.00391688 3.41471 -0.00658587 2.75106 0.00680514C1.35709 0.0350313 0.556646 0.622266 0.0882231 1.93721C0.0719438 1.98303 0.0299328 2.01979 0 2.06075V24.0809C0.387683 25.2292 1.09609 26.027 2.36811 26.1329C3.02768 26.1878 3.69815 26.2022 4.3568 26.1495C4.90019 26.1059 5.09488 26.2936 5.22866 26.8128C5.89848 29.4115 8.78056 31.067 11.3667 30.3708C13.3581 29.8346 14.6288 28.5627 15.1506 26.5688C15.2337 26.2511 15.3548 26.1439 15.6757 26.1569C16.2161 26.1789 16.7604 26.1848 17.2992 26.1455C17.7987 26.1092 18.0886 25.7624 18.0471 25.3123C18.0029 24.8318 17.7046 24.605 17.2409 24.5936C16.752 24.5815 16.2613 24.5662 15.7739 24.5951C15.399 24.6174 15.2353 24.5049 15.1321 24.1177C14.577 22.0334 13.2155 20.7134 11.1114 20.3198C8.91592 19.9091 7.11233 20.6874 5.86513 22.5578C5.46734 23.1543 5.24665 23.8692 4.92487 24.5739C4.96281 24.5637 4.92947 24.5804 4.89599 24.5806C4.26714 24.5842 3.63815 24.5877 3.0093 24.5874C1.87645 24.587 1.57279 24.2856 1.57266 23.1622C1.57239 16.4699 1.57239 9.77738 1.57266 3.08503C1.57266 1.84374 1.83378 1.58327 3.08453 1.58327C18.2141 1.58301 33.3437 1.58301 48.4733 1.58327C49.6994 1.58327 50.0153 1.89336 50.0864 3.20686H49.5167C46.3544 3.20686 43.1923 3.20502 40.03 3.20804C38.9968 3.20909 38.4171 3.7513 38.4122 4.76941C38.3994 7.47781 38.4046 10.1862 38.4095 12.8946C38.4113 13.9543 38.8393 14.7909 39.7754 15.3224C40.2746 15.606 40.7798 15.8901 41.3095 16.1074C43.8914 17.1659 46.6228 17.5318 49.3726 17.7948C50.2704 17.8806 51.1716 17.9297 52.0967 17.9975C52.0967 19.8288 52.117 21.6085 52.0859 23.3874C52.0746 24.0307 51.5056 24.5428 50.8321 24.5744C50.1185 24.6079 49.402 24.5819 48.6552 24.5819C48.5996 24.3862 48.545 24.2051 48.497 24.0225C47.9132 21.799 45.8122 20.1906 43.5072 20.2033C41.1788 20.2163 39.1199 21.8072 38.5612 24.0614C38.4582 24.4772 38.2901 24.6006 37.8587 24.5991C32.3905 24.5822 26.9221 24.5878 21.4538 24.5888C21.2444 24.5888 21.0319 24.58 20.8264 24.6113C20.4268 24.6723 20.1508 24.9507 20.2028 25.3215C20.2413 25.596 20.4788 25.894 20.7113 26.0721C20.8753 26.1978 21.1796 26.1606 21.4213 26.1609C26.8721 26.1648 32.323 26.1726 37.7738 26.1501C38.2975 26.148 38.4724 26.3167 38.592 26.8026C39.2161 29.3381 42.0958 31.0385 44.624 30.3991C46.687 29.8774 48.0005 28.5912 48.5315 26.5302C48.6108 26.2225 48.7511 26.1468 49.0392 26.1588C49.5101 26.1783 49.9823 26.1652 50.454 26.1638C52.4921 26.1571 53.6768 24.9749 53.6781 22.9405C53.6801 19.7952 53.6809 16.65 53.6751 13.5047L53.6747 13.5044ZM10.1265 21.7776C12.0921 21.7576 13.7377 23.3933 13.7375 25.3669C13.7373 27.3452 12.0971 28.9729 10.1278 28.949C8.15368 28.9249 6.57551 27.3343 6.57472 25.3679C6.57393 23.4068 8.16615 21.7974 10.1265 21.7776ZM52.0115 16.4003C48.9667 16.2263 45.9214 15.9874 42.9912 15.0415C42.1529 14.7709 41.3433 14.3761 40.5761 13.9404C40.2966 13.7817 40.0176 13.3407 40.0125 13.024C39.9683 10.3034 39.9871 7.58178 39.9871 4.82114H50.4506C50.7134 6.13043 50.9803 7.4442 51.2404 8.75927C51.5009 10.0764 51.8449 11.3856 51.9848 12.7158C52.1112 13.9176 52.0115 15.1431 52.0115 16.4V16.4003ZM47.1006 25.4388C47.0472 27.4223 45.4294 28.9897 43.4795 28.9474C41.4537 28.9034 39.8755 27.25 39.9443 25.2439C40.0113 23.2902 41.6899 21.7097 43.6225 21.7807C45.5976 21.8532 47.1531 23.4893 47.1005 25.439L47.1006 25.4388Z" fill="white"/>
    <Path d="M17.6063 3.20767C15.5115 3.20452 13.4167 3.20676 11.322 3.20676C9.22719 3.20676 7.13242 3.20439 5.03765 3.20767C3.95941 3.20938 3.47733 3.69014 3.47563 4.77587C3.47116 7.51695 3.47103 10.258 3.47563 12.9991C3.47746 14.083 3.95573 14.5573 5.04316 14.5581C9.23271 14.561 13.4223 14.5611 17.6117 14.5581C18.7005 14.5573 19.1707 14.0859 19.1724 12.9937C19.1766 10.2527 19.1767 7.51157 19.1724 4.77048C19.1707 3.68568 18.69 3.20938 17.6062 3.20767H17.6063ZM10.4946 12.9475H5.08806V4.80186H10.4946V12.9475ZM17.5653 12.9487H12.1546V4.80134H17.5653V12.9487Z" fill="white"/>
    <Path d="M22.3844 14.5589C24.4634 14.5612 26.5426 14.5596 28.6216 14.5594C30.7006 14.5594 32.7797 14.5618 34.8588 14.5584C35.9672 14.5566 36.4377 14.108 36.4411 13.0162C36.4495 10.2553 36.4503 7.49437 36.4406 4.73346C36.4368 3.67374 35.9531 3.20846 34.892 3.20781C30.6989 3.20518 26.5058 3.20531 22.3127 3.20781C21.2187 3.20846 20.7603 3.67387 20.7593 4.77994C20.757 7.50593 20.7574 10.2319 20.7591 12.9579C20.7599 14.1262 21.1977 14.5576 22.3844 14.5589ZM22.35 4.81525H27.8033C27.8033 5.25191 27.7967 5.68226 27.8047 6.11221C27.8172 6.77756 28.1016 7.12336 28.6141 7.11326C29.1096 7.10367 29.3661 6.77677 29.3745 6.13125C29.3801 5.69919 29.3755 5.267 29.3755 4.80935H34.8389V12.9562H29.3758C29.3758 12.1715 29.3762 11.408 29.3755 10.6445C29.3754 10.4349 29.3832 10.2244 29.3674 10.016C29.3318 9.54635 29.0311 9.22772 28.6109 9.23967C28.1668 9.25227 27.8914 9.5025 27.832 9.93994C27.7924 10.232 27.8052 10.5319 27.8039 10.8285C27.8007 11.524 27.8029 12.2196 27.8029 12.9506H22.3499V4.81538L22.35 4.81525Z" fill="white"/>
    <Path d="M39.0461 19.164C39.3181 19.2108 39.5984 19.2094 39.8858 19.2305C40.1716 19.2093 40.4697 19.2114 40.7583 19.1598C41.1594 19.088 41.3493 18.7987 41.3439 18.4112C41.3386 18.0244 41.1441 17.7141 40.7395 17.6831C40.1876 17.6408 39.6288 17.6445 39.0759 17.6767C38.6703 17.7002 38.4575 17.9923 38.4407 18.3798C38.4231 18.7897 38.6187 19.0903 39.0462 19.164H39.0461Z" fill="white"/>
  </G>
  <Defs>
    <ClipPath id="clip0_831_115">
      <Rect width="53.6793" height="30.534" fill="white"/>
    </ClipPath>
  </Defs>
</Svg>

  
);

export default BusIcon;
