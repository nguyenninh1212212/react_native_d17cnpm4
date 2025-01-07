import React from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
import ActionComponents from "@/components/cardAction/ActionComponents"; // Giả sử bạn có ActionComponents
import CardCategory from "@/components/cardAction/CardCategory";

const HomeScreeen = () => {
  const fakeTodo = [
    {
      path: "/",
      title: "Tao de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Lam de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Tim de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Tim de",
      img: "a.png",
    },
  ];
  const fakeData = [
    {
      path: "/",
      title: "Tao de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Lam de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Tim de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Tim de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Tao de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Lam de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Tim de",
      img: "a.png",
    },
    {
      path: "/",
      title: "Tim de",
      img: "a.png",
    },
  ];

  const { width: screenWidth } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, backgroundColor: "#191e47" }}>
      <ScrollView
        className="p-3 h-screen"
        style={{ backgroundColor: "#2a3164" }}
      >
        <View
          style={{
            paddingHorizontal: 30,
            height: 200,
            borderRadius: 20,
          }}
          className="pt-16"
        >
          <Text style={{ fontSize: 15 }} className="text-white">
            Welcome back, My student
          </Text>
          <Text style={{ fontSize: 10, marginTop: 5 }} className="text-white">
            What will you do today !!
          </Text>
        </View>
        <View className=" h-screen">
          <Text className="text-white pl-2 my-5">Hành động</Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row", // Căn các phần tử theo hàng
              flexWrap: "wrap", // Cho phép các phần tử xuống dòng khi không đủ chỗ
            }}
          >
            {fakeTodo.map((e, _i) => (
              <View
                key={_i}
                style={{ width: screenWidth / 2 - 20, marginBottom: 10 }}
              >
                <ActionComponents img={e.img} title={e.title} path={e.path} />
              </View>
            ))}
          </View>
          <Text className="text-white pl-2 my-5">Danh mục </Text>

          <View
            style={{
              flexDirection: "row", // Căn các phần tử theo hàng
              flexWrap: "wrap", // Cho phép các phần tử xuống dòng khi không đủ chỗ
            }}
          >
            {fakeData.map((e, _i) => (
              <View
                key={_i}
                style={{ width: screenWidth / 4 - 10, marginBottom: 10 }}
              >
                <CardCategory img={e.img} title={e.title} path={e.path} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreeen;
