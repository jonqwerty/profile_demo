import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import ButtonNavigation from '../components/ButtonNavigation';
import {Colors, FontFamily} from '../common/style';
import LeftArrow from '../icons/LeftArrow';
import Avatar from '../components/Avatar';
import DotsIcon from '../icons/DotsIcon';
import ProfileReviews from '../components/ProfileReviews';
import StarIcon from '../icons/StarIcon';
import FollowBlock from '../components/FollowBlock';
import Button from '../components/Button';
import {LinearGradient} from 'react-native-linear-gradient';

const ProfileBlock: FC = () => {
  return (
    <LinearGradient
      colors={[Colors.lime, Colors.white]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.4}}>
      <View style={styles.wrapper}>
        <ButtonNavigation
          bgColor={Colors.white}
          icon={<LeftArrow fill={Colors.black} width={15} height={18} />}
        />
        <Avatar isChecked={true} />
        <ButtonNavigation
          bgColor={Colors.white}
          icon={<DotsIcon fill={Colors.black} width={16} height={4} />}
          right={0}
        />
        <Text style={styles.name}>Kate Jamezi-Liamson</Text>
        <View style={styles.followBlock}>
          <ProfileReviews
            icon={<StarIcon fill={Colors.black} width={20} height={20} />}
            numberOne="4.98"
            numberTwo="402"
            text="reviews"
          />
        </View>
        <View style={styles.buttonsBlock}>
          <Button name={'Following'} />
          <Button name={'Message'} />
        </View>
        <View style={styles.followBlock}>
          <FollowBlock number={'555'} text={'followers'} />
          <FollowBlock number={'113'} text={'following'} marginLeft={15} />
        </View>

        <Text style={styles.description}>
          I am an Experience Designer with a deep passion for travel around the
          world, cars, trains, snowboarding and luxury yachts
        </Text>
      </View>
    </LinearGradient>
  );
};

export default ProfileBlock;

const styles = StyleSheet.create({
  wrapper: {marginHorizontal: 24, marginTop: 12},
  name: {
    marginTop: 24,
    fontFamily: FontFamily.outfit_semibold,
    color: Colors.black,
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
  },
  followBlock: {flexDirection: 'row', marginTop: 16, alignSelf: 'center'},
  buttonsBlock: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-between',
    gap: 16,
  },

  description: {
    marginTop: 32,
    fontFamily: FontFamily.outfit_regular,
    color: Colors.black,
    fontSize: 15,
    lineHeight: 20,
  },
});
