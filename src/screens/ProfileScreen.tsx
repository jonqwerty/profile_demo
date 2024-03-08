import {ScrollView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import {Colors} from '../common/style';
import ProfileBlock from '../layout/ProfileBlock';
import ContactsBlock from '../layout/ContactsBlock';
import AdventuresBlock from '../layout/AdventuresBlock';

const ProfileScreen: FC = () => {
  return (
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
