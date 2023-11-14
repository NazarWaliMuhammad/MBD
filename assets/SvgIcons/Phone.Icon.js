import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Phone_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      {...props}>
      <Path
        d="M6.033 12.983c2.4 4.717 6.267 8.567 10.984 10.984l3.666-3.667c.45-.45 1.117-.6 1.7-.4 1.867.617 3.884.95 5.95.95.917 0 1.667.75 1.667 1.667v5.816C30 29.25 29.25 30 28.333 30 12.683 30 0 17.317 0 1.667 0 .75.75 0 1.667 0H7.5c.917 0 1.667.75 1.667 1.667 0 2.083.333 4.083.95 5.95.183.583.05 1.233-.417 1.7l-3.667 3.666z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Phone_Icon;
