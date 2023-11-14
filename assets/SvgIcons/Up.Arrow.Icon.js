import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Up_Arrow_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={28}
      viewBox="0 0 22 28"
      fill="none"
      {...props}>
      <Path
        d="M6.286 21.412h9.428v-9.883H22L11 0 0 11.53h6.286v9.882zM0 24.706h22V28H0v-3.294z"
        fill="#53A16D"
      />
    </Svg>
  );
}

export default Up_Arrow_Icon;
