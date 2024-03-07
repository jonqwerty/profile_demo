import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface ILanguageIconProps {
  fill: string;
  width: number;
  height: number;
}

const LanguageIcon: FC<ILanguageIconProps> = ({
  fill,
  width,
  height,
  ...props
}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        d="M5 1h10c1.375 0 2.5 1.157 2.5 2.571v9c0 1.415-1.125 2.572-2.5 2.572H6.25L2.5 19V3.571C2.5 2.157 3.625 1 5 1Zm1.713 12.857 1.062-2.893h4.45l1.05 2.893h1.875L10.937 2.286H9.063L4.837 13.857h1.876Zm3.287-9L8.475 9.036h3.037L10 4.857Z"
      />
    </Svg>
  );
};

export default LanguageIcon;
