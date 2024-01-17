import React from "react";
import Svg, { Path, G,Defs, Rect, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const HomeIcon = ({ color }) => (

<Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
  <G clip-path="url(#clip0_833_1762)">
    <Path d="M8.27069 0H8.73551C9.23194 0.0994002 9.57856 0.421146 9.92186 0.766056C12.0248 2.8789 14.1325 4.9872 16.246 7.0895C16.5966 7.43831 16.9155 7.79328 17.0026 8.30035V8.6988C16.9937 8.71855 16.9808 8.73753 16.9764 8.75823C16.8095 9.56568 16.2133 10.0576 15.394 10.0625C15.325 10.0629 15.256 10.0625 15.1788 10.0625C15.1788 10.1561 15.1788 10.2222 15.1788 10.2882C15.1788 11.8873 15.1798 13.4865 15.1784 15.0857C15.1773 16.212 14.3934 16.9972 13.2703 16.9988C12.4293 17 11.5881 16.9991 10.7471 16.999C10.3177 16.999 10.1353 16.8146 10.1353 16.3801C10.1351 15.1073 10.1362 13.8347 10.1347 12.5619C10.134 12.0073 9.78913 11.6647 9.23175 11.6623C8.75592 11.6602 8.28 11.6612 7.80407 11.662C7.20226 11.663 6.86988 11.9949 6.8696 12.5967C6.86893 13.8694 6.86988 15.1421 6.86903 16.4148C6.86874 16.8034 6.67393 16.9985 6.28876 16.9988C5.43109 16.9993 4.57333 17.0014 3.71566 16.9967C3.55654 16.9958 3.39363 16.9827 3.23935 16.9461C2.38785 16.7435 1.82933 16.0278 1.82724 15.1336C1.82354 13.5123 1.8261 11.891 1.8261 10.2696C1.8261 10.2053 1.8261 10.141 1.8261 10.0848C1.79439 10.0729 1.78443 10.0661 1.77436 10.0659C1.69148 10.0638 1.60841 10.0653 1.52553 10.0614C0.951818 10.0336 0.509976 9.77616 0.216712 9.28324C-0.158198 8.65304 -0.0397157 7.89477 0.512539 7.34213C2.69925 5.15438 4.88938 2.97004 7.07172 0.777828C7.419 0.429025 7.768 0.100824 8.27069 0Z" fill="#37323E"/>
  </G>
  <Defs>
    <ClipPath id="clip0_833_1762">
      <Rect width="17.0028" height="17" fill="white"/>
    </ClipPath>
  </Defs>
</Svg>
);

export default HomeIcon;
