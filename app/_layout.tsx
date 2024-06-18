import { Stack } from 'expo-router';

export default function initialLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
        </Stack>
    )
}