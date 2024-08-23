import {darkPalette, lightPalette} from '@/theme/palletes';
import {createTheme, ThemeProvider} from '@rneui/themed';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    const theme = createTheme({
        lightColors: lightPalette,
        darkColors: darkPalette,
        mode: 'dark',
    });

    return (
        <ThemeProvider theme={theme}>
            <Stack>
                <Stack.Screen name="Index" options={{headerShown: false}} />
                <Stack.Screen name="(tabs)" options={{headerShown: false}} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </ThemeProvider>
    );
}
