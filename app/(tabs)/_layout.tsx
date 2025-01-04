import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "fixed",
            bottom: 50,
            width: "90%",
            borderRadius: 20,
            overflow: "hidden",
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 0,
            borderTopColor: "transparent",
          },
          android: {
            position: "fixed",
            bottom: 50,
            borderRadius: 20,
            overflow: "hidden",
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderTopWidth: 0,
            borderTopColor: "transparent",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index2"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="hand.wave" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index3"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="pin.square.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
