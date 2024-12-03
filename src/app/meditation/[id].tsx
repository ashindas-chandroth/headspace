import { Text } from "react-native"
import { Meditation } from "../../types"
import { router, useLocalSearchParams, useRouter, Link } from "expo-router"
import { meditations } from "../../data";
import AntDesign from '@expo/vector-icons/AntDesign';
import { View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MeditationDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { top } = useSafeAreaInsets();
    const meditation = meditations.find(m => m.id === Number(id))
    if (!meditation) {
        return <Text>No meditation found</Text>
    }
    return (
        <SafeAreaView>
            <Text className="text-3xl">Meditation details{meditation?.title}</Text>
            <Link href="../" asChild>
                <AntDesign
                    style={{ top: top + 16 }}
                    className="absolute right-0 top-5" size={20} name="close" color="black" />

            </Link>





        </SafeAreaView>
    )
}