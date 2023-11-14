// import React from 'react';
import {Svg, Path} from 'react-native-svg';

const AdminIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      {...props}>
      <Path
        d="M6.667 13H.333v44.333c0 3.484 2.85 6.334 6.334 6.334H51v-6.334H6.667V13zM57.333.333h-38C15.85.333 13 3.183 13 6.667v38C13 48.15 15.85 51 19.333 51h38c3.484 0 6.334-2.85 6.334-6.333v-38c0-3.484-2.85-6.334-6.334-6.334zm-3.166 28.5H41.5V41.5h-6.333V28.833H22.5V22.5h12.667V9.833H41.5V22.5h12.667v6.333z"
        fill="#0D70A6"
      />
    </Svg>
  );
};

export default AdminIcon;
