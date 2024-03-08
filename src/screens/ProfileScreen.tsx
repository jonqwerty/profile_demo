import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import {Colors} from '../common/style';
import ProfileBlock from '../layout/ProfileBlock';
import ContactsBlock from '../layout/ContactsBlock';
import AdventuresBlock from '../layout/AdventuresBlock';
import MyStatusBar from '../components/MyStatusBar';

const ProfileScreen: FC = () => {
  return (
    <>
      <MyStatusBar
        backgroundColor={Colors.lime}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}>
          <ProfileBlock />

          <ContactsBlock />

          <AdventuresBlock />
        </ScrollView>
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  contentContainerStyle: {
    flexGrow: 1,
  },

  wrapper: {height: 100},
  scroll: {},
});
