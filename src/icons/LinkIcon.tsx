import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface ILinkIconProps {
  fill: string;
  width: number;
  height: number;
}

const LinkIcon: FC<ILinkIconProps> = ({fill, width, height, ...props}) => {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill={fill}
        d="M3.96 16.04a3.271 3.271 0 0 1 0-4.623l2.983-2.983-1.417-1.416L2.544 10A5.272 5.272 0 1 0 10 17.456l2.982-2.982-1.416-1.417-2.983 2.982a3.271 3.271 0 0 1-4.622 0Zm3.803-2.312 5.965-5.965-1.491-1.49-5.965 5.964 1.491 1.49ZM10 2.544 7.018 5.526l1.416 1.417 2.983-2.982a3.271 3.271 0 0 1 4.622 0 3.271 3.271 0 0 1 0 4.622l-2.982 2.983 1.416 1.416L17.456 10A5.272 5.272 0 1 0 10 2.544Z"
      />
    </Svg>
  );
};

export default LinkIcon;
