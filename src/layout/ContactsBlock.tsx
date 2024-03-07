import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import ContactItem from '../components/ContactItem';
import ClockIcon from '../icons/ClockIcon';
import {Colors} from '../common/style';
import LanguageIcon from '../icons/LanguageIcon';
import PhoneIcon from '../icons/PhoneIcon';
import LetterIcon from '../icons/LetterIcon';
import LinkIcon from '../icons/LinkIcon';

const ContactsBlock: FC = () => {
  return (
    <View style={styles.container}>
      <ContactItem
        icon={<ClockIcon fill={Colors.black} width={20} height={20} />}
        text={'AWM host since 2023'}
      />
      <ContactItem
        icon={<LanguageIcon fill={Colors.black} width={20} height={20} />}
        text={'Speaks English, German, French'}
      />
      <ContactItem
        icon={<PhoneIcon fill={Colors.black} width={20} height={20} />}
        text={'Phone number verified'}
      />
      <ContactItem
        icon={<LetterIcon fill={Colors.black} width={20} height={20} />}
        text={'Email verified'}
      />
      <ContactItem
        icon={<LinkIcon fill={Colors.black} width={20} height={20} />}
        text={''}
        isLink
      />
    </View>
  );
};

export default ContactsBlock;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
    marginHorizontal: 24,
    paddingTop: 20,
    marginTop: 24,
  },
});
