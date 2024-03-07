import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IDotsIconProps {
  fill: string;
  width: number;
  height: number;
}

const DotsIcon: FC<IDotsIconProps> = ({fill, width, height, ...props}) => {
  return (
    <Svg width={16} height={4} fill="none" {...props}>
      <Path
        fill={fill}
        d="M12 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM6 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM0 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      />
    </Svg>
  );
};

export default DotsIcon;
