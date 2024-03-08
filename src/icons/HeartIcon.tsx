import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IHeartIconProps {
  fill: string;
  fill_2: string;
  width: number;
  height: number;
}

const HeartIcon: FC<IHeartIconProps> = ({
  fill,
  fill_2,
  width,
  height,
  ...props
}) => {
  return (
    <Svg width={width} height={width} fill="none" {...props}>
      <Path
        fill={fill_2}
        d="M17.4 0c-2.088 0-4.092.971-5.4 2.494C10.692.97 8.688 0 6.6 0 2.904 0 0 2.89 0 6.594c0 4.52 4.08 8.224 10.26 13.823L12 22l1.74-1.583C19.92 14.818 24 11.114 24 6.594 24 2.889 21.096 0 17.4 0Z"
      />
      <Path
        fill={fill}
        d="m12.12 18.643-.12.12-.132-.12C6.168 13.476 2.4 10.06 2.4 6.594c0-2.398 1.8-4.196 4.2-4.196 1.848 0 3.648 1.199 4.284 2.83h2.232c.636-1.631 2.436-2.83 4.284-2.83 2.4 0 4.2 1.798 4.2 4.196 0 3.465-3.768 6.882-9.48 12.05ZM17.4 0c-2.088 0-4.092.971-5.4 2.494C10.692.97 8.688 0 6.6 0 2.904 0 0 2.89 0 6.594c0 4.52 4.08 8.224 10.26 13.823L12 22l1.74-1.583C19.92 14.818 24 11.114 24 6.594 24 2.889 21.096 0 17.4 0Z"
      />
    </Svg>
  );
};

export default HeartIcon;
