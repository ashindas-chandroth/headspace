import { Pressable, Text } from "react-native"
import { Meditation } from "../../types"
import { router, useLocalSearchParams, useRouter, Link } from "expo-router"
import { meditations } from "../../data";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";

export default function MeditationDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { top } = useSafeAreaInsets();
    const meditation = meditations.find(m => m.id === Number(id))
    if (!meditation) {
        return <Text>No meditation found</Text>
    }
    return (
        <SafeAreaView className="bg-orange-400 flex-1 justify-between">
            <View className="flex-1 p-10">
                <View className="flex-1">
                    <View className="flex-row items-center justify-between ">
                        <AntDesign name="infocirlceo" size={24} color="black" />
                        <View className="bg-zinc-900 p-2 rounded-md">
                            <Text className="text-zinc-100 font-semibold">Today's meditation</Text>
                        </View>
                        <AntDesign
                            onPress={() => router.back()}
                            size={20} name="close" color="black" />
                    </View>
                    <Text className="text-3xl text-center font-semibold text-zinc-800">Meditation details{meditation?.title}</Text>

                </View>


                <Pressable className="bg-zinc-800 self-center aspect-square w-20 items-center justify-center  rounded-full" >
                    <FontAwesome6 name="pause" size={24} color="white" />
                </Pressable>

                <View className="flex-1">
                    <View className=" mt-auto gap-5">
                        <View className="flex-row justify-between">
                            <MaterialIcons name="airplay" color="#3a3937" size={24} />
                            <MaterialCommunityIcons name="cog-outline" size={24} color="#3a3937" />


                        </View>
                    </View>
                    <Slider
                        style={{ width: '100%', height: 20 }}
                        minimumValue={0}
                        value={0.5}
                        onSlidingComplete={(value)=>console.log(value)}
                        maximumValue={1}
                        minimumTrackTintColor="#3a3937F"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="#3a3937"
                    />
                    <View className="flex-row justify-between">
                        <Text>10:12</Text>
                        <Text>10:12</Text>
                    </View>

                </View>
            </View>




        </SafeAreaView>
    )
}