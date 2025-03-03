import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const BaseHeader = ({ name }: { name: string }) => {
  return (
    <View className="h-14 flex flex-row items-center px-4 mb-2">
      <Ionicons
        name="arrow-back"
        size={24}
        color="white"
        onPress={() => router.back()}
      />

      <Text className="text-white font-bold text-2xl flex-1 text-center">
        {name}
      </Text>

      <View className="w-6" />
    </View>
  );
};

export default BaseHeader;
