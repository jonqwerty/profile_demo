import {StyleSheet, Image, View} from 'react-native';
import React, {FC} from 'react';

import CheckIcon from '../icons/CheckIcon';
import {Colors} from '../common/style';

interface IAvatarProps {
  isChecked: boolean;
}

const Avatar: FC<IAvatarProps> = ({isChecked}) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <Image
        source={require('../assets/images/kate.png')}
        resizeMode="cover"
        style={styles.avatar}
      />
      {isChecked ? (
        <View style={styles.iconWrapper}>
          <CheckIcon fill={Colors.black} width={30} height={30} />
        </View>
      ) : null}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {width: 120, height: 120, borderRadius: 60},
  iconWrapper: {position: 'absolute', right: 0, bottom: 0},
});
