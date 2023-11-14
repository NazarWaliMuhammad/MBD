// import React from 'react';
import {Svg, Path} from 'react-native-svg';

const AnnouncementIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={69}
      height={69}
      viewBox="0 0 69 69"
      fill="none"
      {...props}>
      <Path
        d="M61.5.75h-54C3.788.75.784 3.788.784 7.5L.75 68.25l13.5-13.5H61.5c3.713 0 6.75-3.038 6.75-6.75V7.5c0-3.712-3.037-6.75-6.75-6.75zM37.875 31.125h-6.75v-20.25h6.75v20.25zm0 13.5h-6.75v-6.75h6.75v6.75z"
        fill="#0D70A6"
      />
    </Svg>
  );
};

export default AnnouncementIcon;
