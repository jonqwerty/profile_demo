import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';

interface IProfileReviewsProps {
  icon: React.ReactElement;
  numberOne: string;
  numberTwo: string;
  text: string;
}

const ProfileReviews: FC<IProfileReviewsProps> = ({
  icon,
  numberOne,
  numberTwo,
  text,
}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.numberOne}>{numberOne}</Text>
      <Text style={styles.numberTwo}>{`(${numberTwo} ${text})`}</Text>
    </View>
  );
};

export default ProfileReviews;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  numberOne: {
    marginLeft: 8,
    fontFamily: FontFamily.outfit_semibold,
    color: Colors.black,
    fontSize: 17,
    lineHeight: 22,
    textDecorationLine: 'underline',
  },
  numberTwo: {
    marginLeft: 8,
    fontFamily: FontFamily.outfit_regular,
    color: Colors.black,
    fontSize: 17,
    lineHeight: 22,
    textDecorationLine: 'underline',
  },
});
