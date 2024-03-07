import {ScrollView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import {Colors} from '../common/style';
import ProfileBlock from '../layout/ProfileBlock';

const ProfileScreen: FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}>
        <ProfileBlock />
      </ScrollView>
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
  scroll: {},
});
