import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';

interface IButtonProps {
  name: string;
}

const Button: FC<IButtonProps> = ({name}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: FontFamily.outfit_medium,
    color: Colors.black,
    fontSize: 17,
    lineHeight: 22,
  },
});
