import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors, FontFamily} from '../common/style';

interface IContactItemProps {
  icon: React.ReactElement;
  text: string;
  isLink?: boolean;
}

const ContactItem: FC<IContactItemProps> = ({icon, text, isLink}) => {
  return (
    <View style={styles.container}>
      <View>{icon}</View>

      {isLink ? (
        <View style={styles.row}>
          <Text style={styles.textLink}>Instagram</Text>
          <Text style={styles.coma}>,</Text>
          <Text style={styles.textLink}>Linkedin</Text>
          <Text style={styles.coma}>,</Text>
          <Text style={styles.textLink}>visitphuket.com</Text>
          <Text style={[styles.coma, styles.marginLeft]}>+5</Text>
        </View>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginTop: 12},
  row: {flexDirection: 'row', marginLeft: 8},
  text: {
    marginLeft: 12,
    fontFamily: FontFamily.outfit_regular,
    color: Colors.black,
    fontSize: 15,
    lineHeight: 20,
  },
  textLink: {
    marginLeft: 4,
    fontFamily: FontFamily.outfit_medium,
    color: Colors.black,
    fontSize: 15,
    lineHeight: 20,
    textDecorationLine: 'underline',
  },
  coma: {
    fontFamily: FontFamily.outfit_medium,
    color: Colors.black,
    fontSize: 15,
    lineHeight: 20,
  },
  marginLeft: {
    marginLeft: 4,
  },
});
