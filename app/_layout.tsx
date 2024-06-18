import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function initialLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen
                name="login"
                options={{
                    presentation: 'modal',
                    title: '',
                    headerTitleStyle: {
                        // fontFamily: 'mon-sb',
                    },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="close-outline" size={28} />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    )
}