import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IStarIconProps {
  fill: string;
  width: number;
  height: number;
}

const StarIcon: FC<IStarIconProps> = ({fill, width, height, ...props}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        d="M10 15.466 15.871 19l-1.558-6.66L19.5 7.859l-6.83-.587L10 1 7.33 7.272.5 7.859l5.178 4.481L4.129 19 10 15.466Z"
      />
    </Svg>
  );
};

export default StarIcon;
