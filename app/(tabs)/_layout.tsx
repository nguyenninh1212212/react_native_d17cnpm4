import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, View } from "react-native";
import { ViewStyle } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { icons } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          default: styles,
        }),
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: () => <Ionicons name="home" size={30} color={"white"} />,
        }}
      />
      <Tabs.Screen
        name="Library/index"
        options={{
          tabBarIcon: () => (
            <Ionicons name="albums" size={30} color={"white"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Exam/index"
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications" size={30} color={"white"} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles: ViewStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderTopWidth: 0,
  shadowColor: "#000",
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  backgroundColor: "#454e91",
};
