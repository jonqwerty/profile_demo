import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';
import Switcher from '../components/Switcher';
import Card from './Card';

const AdventuresBlock: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kate’s Adventures</Text>
      <Switcher />
      <Text style={styles.month}>December</Text>
      <View style={styles.cardsBlock}>
        <Card
          image={require('../assets/images/photo_2.png')}
          iconStrock={Colors.white}
          iconFill={Colors.black_70}
        />
        <Card
          image={require('../assets/images/photo_1.png')}
          iconStrock={Colors.black}
          iconFill={Colors.lime}
        />
        <Card
          image={require('../assets/images/photo_2.png')}
          iconStrock={Colors.white}
          iconFill={Colors.black_70}
        />
      </View>
      <View style={styles.cardsBlock}></View>
    </View>
  );
};

export default AdventuresBlock;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },

  title: {
    marginTop: 45,
    fontFamily: FontFamily.outfit_semibold,
    color: Colors.black,
    fontSize: 20,
    lineHeight: 25,
  },
  month: {
    marginTop: 36,
    fontFamily: FontFamily.outfit_medium,
    color: Colors.black,
    fontSize: 22,
    lineHeight: 28,
  },

  cardsBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
