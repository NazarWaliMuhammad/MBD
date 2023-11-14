import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function Left_Arrow_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      {...props}>
      <G clipPath="url(#clip0_9_1194)">
        <Path
          d="M9.75 19.5l6.5-6.5-6.5-6.5"
          stroke="#347DE1"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_9_1194">
          <Path fill="#fff" transform="rotate(180 13 13)" d="M0 0H26V26H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Left_Arrow_Icon;
