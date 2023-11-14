import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Search_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        d="M15 15l-4.667-4.667M1 6.444a5.444 5.444 0 1010.889 0A5.444 5.444 0 001 6.444z"
        stroke="#347DE1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Search_Icon;
