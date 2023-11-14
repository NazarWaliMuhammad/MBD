import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Down_arrow_icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={28}
      viewBox="0 0 22 28"
      fill="none"
      {...props}>
      <Path
        d="M22 9.882h-6.286V0H6.286v9.882H0l11 11.53 11-11.53zM0 24.706V28h22v-3.294H0z"
        fill="#0D70A6"
      />
    </Svg>
  );
}

export default Down_arrow_icon;
