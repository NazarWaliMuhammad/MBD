import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Eye_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <Path
        d="M12.108 7.892l-4.216 4.216a2.98 2.98 0 114.217-4.217z"
        stroke="#979797"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.85 4.808c-1.458-1.1-3.125-1.7-4.85-1.7-2.942 0-5.683 1.734-7.592 4.734-.75 1.175-.75 3.15 0 4.325a11.94 11.94 0 002.259 2.641M7.017 16.275c.95.4 1.958.617 2.983.617 2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325a13.504 13.504 0 00-.884-1.225M12.925 10.583a2.97 2.97 0 01-2.35 2.35M7.892 12.108l-6.225 6.225M18.333 1.667l-6.225 6.225"
        stroke="#979797"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Eye_Icon;
