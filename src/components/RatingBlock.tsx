import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';

interface IRatingBlockProps {
  icon: React.ReactElement;
  numberOne?: string;
  numberTwo?: string;
  days: string;
  isNew?: boolean;
}

const RatingBlock: FC<IRatingBlockProps> = ({
  icon,
  numberOne,
  numberTwo,
  days,
  isNew,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      {isNew ? <Text style={styles.numberOne}>NEW</Text> : null}
      <Text style={styles.numberOne}>{numberOne}</Text>
      <Text style={styles.numberTwo}>{numberTwo}</Text>
      <Text style={styles.days}>{days}</Text>
    </View>
  );
};

export default RatingBlock;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  numberOne: {
    marginLeft: 2,
    fontFamily: FontFamily.outfit_semibold,
    color: Colors.black,
    fontSize: 13,
    lineHeight: 18,
  },
  numberTwo: {
    marginLeft: 2,
    fontFamily: FontFamily.outfit_regular,
    color: Colors.black,
    fontSize: 13,
    lineHeight: 18,
  },
  days: {
    marginLeft: 8,
    fontFamily: FontFamily.outfit_regular,
    color: Colors.black,
    fontSize: 13,
    lineHeight: 18,
  },
  icon: {
    transform: [{scale: 0.7}],
  },
});
