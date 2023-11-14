import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Property_Icon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={30}
      viewBox="0 0 28 30"
      fill="none"
      {...props}>
      <Path
        d="M18.667 14.21V4.737L14 0 9.333 4.737v3.158H0V30h28V14.21h-9.333zM6.222 26.843h-3.11v-3.158h3.11v3.158zm0-6.316h-3.11v-3.158h3.11v3.158zm0-6.316h-3.11v-3.157h3.11v3.157zm9.334 12.632h-3.112v-3.158h3.112v3.158zm0-6.316h-3.112v-3.158h3.112v3.158zm0-6.316h-3.112v-3.157h3.112v3.157zm0-6.315h-3.112V4.737h3.112v3.158zm9.333 18.947h-3.111v-3.158h3.11v3.158zm0-6.316h-3.111v-3.158h3.11v3.158z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Property_Icon;
