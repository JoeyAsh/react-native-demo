// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import {type IconProps} from '@expo/vector-icons/build/createIconSet';
import Ionicons from '@expo/vector-icons/Ionicons';
import {type ComponentProps} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: -3,
    },
});

export function TabBarIcon({
    style,
    ...rest
}: IconProps<ComponentProps<typeof Ionicons>['name']>) {
    return (
        <Ionicons
            size={24}
            className={styles.container}
            style={style}
            {...rest}
        />
    );
}
