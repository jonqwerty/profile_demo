import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Colors, ScreenWidth} from '../common/style';
import HeartIcon from '../icons/HeartIcon';

interface ICardProps {
  image: ImageSourcePropType | undefined;
  iconStrock: string;
  iconFill: string;
}

const Card: FC<ICardProps> = ({image, iconStrock, iconFill}) => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.img} />
      <View style={styles.icon}>
        <HeartIcon fill={iconStrock} fill_2={iconFill} width={24} height={22} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
  img: {width: (ScreenWidth - 24 * 2) / 2 - 8, height: 207, borderRadius: 12},
  icon: {position: 'absolute', top: 10, right: 10},
});
