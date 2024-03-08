import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily, ScreenWidth} from '../common/style';
import HeartIcon from '../icons/HeartIcon';
import RatingBlock from '../components/RatingBlock';
import StarIcon from '../icons/StarIcon';

interface ICardProps {
  image: ImageSourcePropType | undefined;
  iconStrock: string;
  iconFill: string;
  isBusiness?: boolean;
  description: string;
  route: string;
  start?: string;
  isFree?: boolean;
  days: string;
  numberOne?: string;
  numberTwo?: string;
  isNew?: boolean;
}

const Card: FC<ICardProps> = ({
  image,
  iconStrock,
  iconFill,
  isBusiness,
  description,
  route,
  start,
  isFree,
  days,
  numberOne,
  numberTwo,
  isNew,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.img} />
      <View style={styles.ratingWrapper}>
        <RatingBlock
          icon={<StarIcon fill={Colors.black} width={20} height={20} />}
          numberOne={numberOne}
          numberTwo={numberTwo}
          days={days}
          isNew={isNew}
        />
      </View>

      <TouchableOpacity style={styles.icon}>
        <HeartIcon fill={iconStrock} fill_2={iconFill} width={24} height={22} />
      </TouchableOpacity>

      {isBusiness ? (
        <View style={styles.business}>
          <Text style={styles.text}>BUSINESS</Text>
        </View>
      ) : null}

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.route}>{route}</Text>

      {start ? <Text style={styles.start}>{start}</Text> : null}

      {isFree ? (
        <Text style={[styles.start, {textTransform: 'uppercase'}]}>Free</Text>
      ) : null}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {width: (ScreenWidth - 24 * 2) / 2 - 8, marginTop: 20},
  ratingWrapper: {marginTop: 16},
  img: {width: (ScreenWidth - 24 * 2) / 2 - 8, height: 207, borderRadius: 12},
  icon: {position: 'absolute', top: 10, right: 10},
  business: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: Colors.black_70,
    alignItems: 'flex-start',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: FontFamily.outfit_medium,
    color: Colors.white,
    fontSize: 12,
    lineHeight: 16,
    textTransform: 'uppercase',
  },
  description: {
    marginTop: 8,
    fontFamily: FontFamily.outfit_semibold,
    color: Colors.black,
    fontSize: 15,
    lineHeight: 20,
  },
  route: {
    marginTop: 8,
    fontFamily: FontFamily.outfit_medium,
    color: Colors.black,
    fontSize: 13,
    lineHeight: 18,
  },
  start: {
    marginTop: 8,
    fontFamily: FontFamily.outfit_regular,
    color: Colors.black,
    fontSize: 13,
    lineHeight: 18,
  },
});
