import * as React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

function DownArrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 463.99206 466.77877"
      {...props}>
      <Path
        d="M 161.47 149.384 L 182.536 139.405 C 173.895 151.463 166.45 170.295 162.464 185.281 C 155.716 171.322 144.837 154.242 134.068 144.04 L 156.332 149.767 C 142.613 82.53 91.012 34.261 31.921 34.261 L 31.085 31.832 C 92.807 31.832 147.462 79.433 161.47 149.384 L 161.47 149.384 Z"
        fill="#3f3d56"
      />
    </Svg>
  );
}

export default DownArrow;
