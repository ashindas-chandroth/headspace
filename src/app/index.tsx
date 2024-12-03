import { FlatList, Text, View } from "react-native"
import { meditations } from "../data"
import React from "react";
import { Meditation } from "../types";
import { MeditationListItem } from "../components/MeditationListItem";




export default function HomeScreen() {
    return (
        <FlatList 
        className="bg-white"
        contentContainerClassName="gap-5 p-3"
        data={meditations} renderItem={({item})=><MeditationListItem meditation={item}/>}/>
    )

}