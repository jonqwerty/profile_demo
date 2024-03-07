import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

interface IButtonNavigationProps {
  bgColor: string;
  icon: React.ReactElement;
  top?: number;
  left?: number;
  right?: number;
}

const ButtonNavigation: FC<IButtonNavigationProps> = ({
  bgColor,
  icon,
  top,
  left,
  right,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bgColor, top, left, right}]}>
      {icon}
    </TouchableOpacity>
  );
};

export default ButtonNavigation;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
