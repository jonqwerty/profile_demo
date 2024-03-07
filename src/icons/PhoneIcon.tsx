import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IPhoneIconProps {
  fill: string;
  width: number;
  height: number;
}

const PhoneIcon: FC<IPhoneIconProps> = ({fill, width, height, ...props}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        d="M10.722 20H3.83A1.823 1.823 0 0 1 2 18.182V1.818C2 .81 2.814 0 3.829 0h9.142C13.977 0 14.8.81 14.8 1.818v9.091c-.64 0-1.253.118-1.829.318v-7.59H3.83v12.727h5.485c0 1.4.53 2.672 1.408 3.636Zm2.935-.764-2.514-2.727 1.06-1.055 1.454 1.446 3.282-3.264L18 14.918l-4.343 4.318Z"
      />
    </Svg>
  );
};

export default PhoneIcon;
