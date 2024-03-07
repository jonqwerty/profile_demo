import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IClockIconProps {
  fill: string;
  width: number;
  height: number;
}

const ClockIcon: FC<IClockIconProps> = ({fill, width, height, ...props}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        d="M10 1c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9Zm3.87 11.88L9.1 10.27V5.5h1.35v3.96l4.05 2.25-.63 1.17Z"
      />
    </Svg>
  );
};

export default ClockIcon;
