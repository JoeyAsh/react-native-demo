import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

export default function Dummy() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <Ionicons size={310} name="camera" style={styles.headerImage} />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Dummy page</ThemedText>
            </ThemedView>
            <ThemedText>
                This is just a dummy to figure out what's poppin.
            </ThemedText>
            <ThemedText style={styles.testText}>Styled test text.</ThemedText>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        bottom: -90,
        color: '#808080',
        left: -35,
        position: 'absolute',
    },
    testText: {
        fontSize: 19,
        left: 20,
        top: 40,
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
