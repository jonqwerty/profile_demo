import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';

interface IFollowBlockProps {
  number: string;
  text: string;
  marginLeft?: number;
}

const FollowBlock: FC<IFollowBlockProps> = ({number, text, marginLeft}) => {
  return (
    <View style={[styles.container, {marginLeft}]}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default FollowBlock;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  number: {
    fontFamily: FontFamily.outfit_semibold,
    color: Colors.black,
    fontSize: 17,
    lineHeight: 22,
  },
  text: {
    fontFamily: FontFamily.outfit_regular,
    color: Colors.black,
    fontSize: 17,
    lineHeight: 22,
    marginLeft: 5,
  },
});
