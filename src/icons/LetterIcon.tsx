import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface ILetterIconProps {
  fill: string;
  width: number;
  height: number;
}

const LetterIcon: FC<ILetterIconProps> = ({fill, width, height, ...props}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        d="M10.732 15.868c0-.337.039-.664.088-.991H1.95V4.965L9.756 9.92l7.805-4.956v5.045a5.782 5.782 0 0 1 1.951.714V2.982c0-1.09-.878-1.982-1.951-1.982H1.951C.878 1 0 1.892 0 2.982v11.895c0 1.09.878 1.982 1.951 1.982h8.869a6.68 6.68 0 0 1-.088-.991ZM17.56 2.982 9.756 7.938 1.951 2.982h15.61ZM15.366 19l-2.683-2.974 1.132-1.15 1.55 1.577 3.503-3.559L20 14.292 15.366 19Z"
      />
    </Svg>
  );
};

export default LetterIcon;
