import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface ILeftArrowProps {
  fill: string;
  width: number;
  height: number;
}

const LeftArrow: FC<ILeftArrowProps> = ({fill, width, height, ...props}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        d="M11 15.87 4.201 9 11 2.115 8.907 0 0 9l8.907 9L11 15.87Z"
      />
    </Svg>
  );
};

export default LeftArrow;
