import { Tabs } from "expo-router";
import React, { useRef, useEffect } from "react";
import { Animated, Platform } from "react-native";
import { ViewStyle } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol, IconSymbolName } from "@/components/ui/IconSymbol";
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
        toValue: -20,
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
        backgroundColor: "#454e91",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: focused ? "#f021ff" : "",
          borderRadius: 100,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconSymbol
          size={focused ? 35 : 28}
          name={name as IconSymbolName}
          color={focused ? "#ffffff" : "#828cce"}
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
        headerShown: false,
        headerTransparent: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: styles,
          android: styles,
          default: styles,
        }),
        headerStyle: {
          backgroundColor: "transparent", // Màu nền của header (nếu cần)
          height: 0, // Điều chỉnh chiều cao header (mặc định thường khoảng 56px)
          marginTop: 0, // Loại bỏ khoảng cách trên
          paddingTop: 0, // Loại bỏ padding trên header
        },
      }}
    >
      <Tabs.Screen
        name="Home/index2"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon
              name={"hand.wave" as string}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon
              name={"house.fill" as string}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Home/index3"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <AnimatedTabIcon
              name={"pin.square.fill" as string}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

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
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  backgroundColor: "#454e91",
};
