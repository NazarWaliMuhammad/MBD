import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Dots_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={4}
      viewBox="0 0 18 4"
      fill="none"
      {...props}>
      <Path
        d="M1 2a1 1 0 102 0 1 1 0 00-2 0zm7 0a1 1 0 102 0 1 1 0 00-2 0zm7 0a1 1 0 102 0 1 1 0 00-2 0z"
        stroke="#347DE1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Dots_Icon;
