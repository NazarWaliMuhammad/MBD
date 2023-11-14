// import React from 'react';
import {Svg, Path} from 'react-native-svg';

const CityIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={69}
      height={74}
      viewBox="0 0 69 74"
      fill="none"
      {...props}>
      <Path
        d="M46 35.053V11.684L34.5 0 23 11.684v7.79H0V74h69V35.053H46zM15.333 66.21H7.667v-7.789h7.666v7.79zm0-15.578H7.667v-7.79h7.666v7.79zm0-15.58H7.667v-7.789h7.666v7.79zm23 31.158h-7.666v-7.789h7.666v7.79zm0-15.578h-7.666v-7.79h7.666v7.79zm0-15.58h-7.666v-7.789h7.666v7.79zm0-15.578h-7.666v-7.79h7.666v7.79zm23 46.736h-7.666v-7.789h7.666v7.79zm0-15.578h-7.666v-7.79h7.666v7.79z"
        fill="#53A16D"
      />
    </Svg>
  );
};

export default CityIcon;
