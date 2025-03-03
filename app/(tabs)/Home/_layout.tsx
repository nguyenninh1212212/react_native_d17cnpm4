import { DarkTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider, DefaultTheme } from "react-native-paper";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default _layout;
