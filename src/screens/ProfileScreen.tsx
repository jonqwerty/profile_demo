import {ScrollView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../common/style';
import ProfileBlock from '../layout/ProfileBlock';

const ProfileScreen: FC = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.lime, Colors.white]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.7}}>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}>
          <ProfileBlock />
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  contentContainerStyle: {flexGrow: 1},

  wrapper: {height: 100},
  scroll: {marginHorizontal: 24, marginTop: 12},
});
