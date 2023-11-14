import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Message_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={20}
      viewBox="0 0 26 20"
      fill="none"
      {...props}>
      <Path
        d="M23 0H3A2.497 2.497 0 00.513 2.5L.5 17.5C.5 18.875 1.625 20 3 20h20c1.375 0 2.5-1.125 2.5-2.5v-15C25.5 1.125 24.375 0 23 0zm0 5l-10 6.25L3 5V2.5l10 6.25L23 2.5V5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Message_Icon;
