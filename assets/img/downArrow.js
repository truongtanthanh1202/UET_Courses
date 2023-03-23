import * as React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

function DownArrow(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="87.726 40.388 151.451 153.449"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M218.111 157.94l21.066-9.979c-8.64 12.059-16.085 30.891-20.071 45.876-6.749-13.959-17.628-31.039-28.397-41.241l22.265 5.728C199.255 91.086 147.653 42.817 88.563 42.817l-.837-2.429c61.722 0 116.378 47.601 130.385 117.552z"
        fill={props.color}
      />
    </Svg>
  );
}

export default DownArrow;
