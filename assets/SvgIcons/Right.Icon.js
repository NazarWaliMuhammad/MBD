import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function Right_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <G clipPath="url(#clip0_9_1418)">
        <Path
          d="M15 6l-6 6 6 6"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_9_1418">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Right_Icon;
