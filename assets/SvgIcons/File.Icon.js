import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function File_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={40}
      viewBox="0 0 32 40"
      fill="none"
      {...props}>
      <Path
        d="M4 0C1.8 0 .02 1.8.02 4L0 36c0 2.2 1.78 4 3.98 4H28c2.2 0 4-1.8 4-4V12L20 0H4zm14 14V3l11 11H18z"
        fill="#53A16D"
      />
    </Svg>
  );
}

export default File_Icon;
