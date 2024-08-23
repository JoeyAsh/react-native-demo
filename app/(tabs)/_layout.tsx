import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {useTheme} from '@rneui/themed';
import {Tabs} from 'expo-router';
import React from 'react';

export default function TabLayout() {
    const {theme} = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.grey2,
                tabBarStyle: {
                    borderTopColor: theme.colors.divider,
                    backgroundColor: theme.colors.background,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon
                            name={focused ? 'code-slash' : 'code-slash-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Dummy"
                options={{
                    title: 'Dummy',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon
                            name={focused ? 'camera' : 'camera-outline'}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color, focused}) => (
                        <TabBarIcon
                            name={
                                focused
                                    ? 'accessibility'
                                    : 'accessibility-outline'
                            }
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
