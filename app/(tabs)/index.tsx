import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import ActionComponents from "@/components/cardAction/ActionComponents";
import CardCategory from "@/components/cardAction/CardCategory";

const HomeScreen = () => {
  const [fakeTodo] = useState([
    { path: "/", title: "Tao de", img: "a.png" },
    { path: "/", title: "Lam de", img: "a.png" },
    { path: "/", title: "Tao de", img: "a.png" },
    { path: "/", title: "Lam de", img: "a.png" },
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

  const renderHeader = () => (
    <View className="p-6">
      <Text className="text-white text-lg">Welcome back, My student</Text>
      <Text className="text-white text-sm mt-1">What will you do today !!</Text>
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

  return (
    <FlatList
      className="h-screen bg-slate-950"
      data={[]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={null}
      ListHeaderComponent={
        <View className="p-6">
          {renderHeader()}
          {renderActionSection()}
          {renderCategorySection()}
        </View>
      }
      contentContainerStyle={{ backgroundColor: "#2a3164", flexGrow: 1 }}
    />
  );
};

export default HomeScreen;
