import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ActionComponents from "@/components/cardAction/ActionComponents";
import CardCategory from "@/components/cardAction/CardCategory";
import { icons } from "@/constants";

const HomeScreen = () => {
  const [fakeTodo] = useState([
    { path: "/", title: "Tạo đề", img: icons.doquiz },
    { path: "/", title: "Làm đề", img: icons.quiz },
    { path: "/", title: "Kết quả", img: icons.result },
    { path: "/", title: "Khám phá", img: icons.search },
  ]);

  const [fakeData] = useState([
    { path: "/", title: "Tim de", img: "a.png" },
    { path: "/", title: "Lam de", img: "a.png" },
    { path: "/", title: "Tim de", img: "a.png" },
    { path: "/", title: "Lam de", img: "a.png" },
    { path: "/", title: "Tim de", img: "a.png" },
    { path: "/", title: "Lam de", img: "a.png" },
    { path: "/", title: "Tim de", img: "a.png" },
    { path: "/", title: "Lam de", img: "a.png" },
  ]);

  console.log(icons.user);

  const renderHeader = () => (
    <View className=" bg-primary_200 px-6 pt-12 w-full">
      <View className="flex-row justify-between w-full items-center">
        <View className="flex-row">
          <Image source={icons.user} className="w-12 h-12" />
          <View className=" text-center flex-col justify-center ml-3">
            <Text className="text-white">Nguyễn Văn A</Text>
            <Text className="text-white text-[10px] ">Tài khoản thường</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-1">
          <Text className="text-yellow-400 font-bold">0</Text>
          <Image source={icons.point} className="w-8 h-8 " />
        </View>
      </View>
      <Text className="text-white text-[10px] py-5 ">
        Welcome back, My student,What will you do today !!
      </Text>
    </View>
  );

  const renderActionSection = () => (
    <>
      <Text className="text-white my-5">Hành động</Text>
      <FlatList
        data={fakeTodo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="w-[48%] mb-4">
            <ActionComponents
              img={item.img}
              title={item.title}
              path={item.path}
            />
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </>
  );

  const renderCategorySection = () => (
    <>
      <Text className="text-white  my-5">Danh mục</Text>
      <FlatList
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="w-[23%] mb-4 ">
            <CardCategory img={item.img} title={item.title} path={item.path} />
          </View>
        )}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </>
  );

  const searchQuiz = () => {
    return (
      <View className="h-10 w-full bg-white flex-row rounded-lg overflow-hidden">
        <TextInput className="w-5/6 bg-primary_250 text-white" />
        <TouchableOpacity className=" bg-red-500 w-1/6 h-full" />
      </View>
    );
  };

  return (
    <FlatList
      className="h-screen bg-primary_200 "
      data={[]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={null}
      ListHeaderComponent={
        <View className="">
          {renderHeader()}
          <View className="p-6">
            {searchQuiz()}
            {renderActionSection()}
            {renderCategorySection()}
          </View>
        </View>
      }
      contentContainerStyle={{
        backgroundColor: "#2a3164",
        flexGrow: 1,
      }}
    />
  );
};

export default HomeScreen;
