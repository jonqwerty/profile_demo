import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';

import {Colors, FontFamily, ScreenWidth} from '../common/style';

const Switcher: FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Listed');

  const handlePress = (item: string) => {
    setActiveItem(item);
  };

  return (
    <View style={styles.switcher}>
      <TouchableOpacity
        onPress={() => {
          handlePress('Listed');
        }}>
        <Text
          style={
            activeItem === 'Listed' ? styles.textActive : styles.textNotActive
          }>
          Listed
        </Text>
        <View
          style={
            activeItem === 'Listed'
              ? styles.marker
              : [styles.marker, {backgroundColor: Colors.white}]
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handlePress('Booked');
        }}>
        <Text
          style={
            activeItem === 'Booked' ? styles.textActive : styles.textNotActive
          }>
          Booked
        </Text>
        <View
          style={
            activeItem === 'Booked'
              ? styles.marker
              : [styles.marker, {backgroundColor: Colors.white}]
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handlePress('Wishlisted');
        }}>
        <Text
          style={
            activeItem === 'Wishlisted'
              ? styles.textActive
              : styles.textNotActive
          }>
          Wishlisted
        </Text>
        <View
          style={
            activeItem === 'Wishlisted'
              ? styles.marker
              : [styles.marker, {backgroundColor: Colors.white}]
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Switcher;

const styles = StyleSheet.create({
  switcher: {
    marginTop: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: ScreenWidth,
    paddingHorizontal: 24,
    left: -24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  marker: {
    marginTop: 12,
    height: 4,
    backgroundColor: Colors.black,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  textActive: {
    fontFamily: FontFamily.outfit_medium,
    color: Colors.black,
    fontSize: 17,
    lineHeight: 22,
  },
  textNotActive: {
    fontFamily: FontFamily.outfit_medium,
    color: Colors.grey_200,
    fontSize: 17,
    lineHeight: 22,
  },
});
