import { Link } from "expo-router";
import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

const CardCategory = ({
  img,
  title,
  path,
}: {
  img: string;
  title: string;
  path: string;
}) => {
  return (
    <Link
      href={path as any}
      className=" h-20 w-full  bg-purple-300 rounded-xl "
    >
      <View className="">
        <Image source={{ uri: img }} />
        <Text>{title}</Text>
      </View>
    </Link>
  );
};

export default CardCategory;
