import {View, StatusBar, StatusBarStyle, Platform} from 'react-native';
import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  backgroundColor: string;
  barStyle: StatusBarStyle | null | undefined;
}

const MyStatusBar: FC<Props> = ({backgroundColor, barStyle, ...props}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{height: insets.top, backgroundColor}}
      testID="MyStatusBar-root">
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={Platform.OS === 'ios'}
        {...props}
      />
    </View>
  );
};

export default MyStatusBar;
