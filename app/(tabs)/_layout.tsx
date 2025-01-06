import { Tabs } from "expo-router";
import React, { useRef, useEffect } from "react";
import { Animated, Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

function AnimatedTabIcon({
  name,
  color,
  focused,
}: {
  name: string;
  color: string;
  focused: boolean;
}) {
  const translateY = useRef(new Animated.Value(0)).current; // Initial position

  useEffect(() => {
    if (focused) {
      // Move up
      Animated.spring(translateY, {
        toValue: -30,
        friction: 4,
        useNativeDriver: true,
      }).start();
    } else {
      // Move back to original position
      Animated.spring(translateY, {
        toValue: 0,
        friction: 4,
        useNativeDriver: true,
      }).start();
    }
  }, [focused, translateY]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        width: 75,
        height: 75,
        borderRadius: 100,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: focused ? "#9fd7f9" : "",
          borderRadius: 100,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconSymbol
          size={focused ? 35 : 28}
          backgroundColor={focused ? "#ffffff" : "transparent"}
          name={name}
          color={focused ? "#ffffff" : "#212121"}
        />
      </Animated.View>
    </Animated.View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: styles,
          android: styles,
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index2"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon name="hand.wave" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon
              name="house.fill"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index3"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon
              name="pin.square.fill"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

import { ViewStyle } from "react-native";

const styles: ViewStyle = {
  position: "absolute",
  borderRadius: 20,
  marginLeft: "auto",
  marginRight: "auto",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderTopWidth: 0,
  borderTopColor: "transparent",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};
