import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BaseHeader from "@/components/BaseHeader";

const Exam = () => {
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<boolean>(false);
  const router = useRouter();
  const onPress = useCallback(() => {
    router.push({ pathname: "/(Exam)/detail/[id]", params: { id: "1" } });
  }, [router]);

  return (
    <SafeAreaView className="flex-1 bg-[#0D1440]">
      <BaseHeader name="Nội dung" />
      <ScrollView className="bg-gray-100 flex-1 rounded-t-2xl p-4">
        <View className="bg-gray-300 rounded-xl">
          <Image
            source={{
              uri: "https://topviecit.vn/blog/wp-content/uploads/2021/11/thumb-5.jpg",
            }}
            className="w-full h-56 rounded-lg"
            resizeMode="cover"
          />
        </View>

        <Text className="text-lg font-bold mt-3">What is HTML, CSS?</Text>

        <View className="flex-row items-center gap-2 mt-2">
          <Ionicons name="eye" size={16} color="gray" />
          <Text className="text-gray-600">100</Text>
          <Ionicons name="people" size={16} color="gray" />
          <Text className="text-gray-600">100</Text>
          <Ionicons name="bookmark" size={16} color="gray" />
          <Text className="text-gray-600">100</Text>
        </View>

        <View className="flex-row mt-2 w-full justify-between ">
          <TouchableOpacity
            className="bg-yellow-400 items-center py-2 w-[48%] rounded-lg"
            onPress={onPress}
          >
            <Text className="text-black font-bold">Bắt đầu</Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-white py-2 items-center rounded-lg shadow w-[48%]">
            <Text className="text-black font-bold">Lưu</Text>
          </TouchableOpacity>
        </View>

        {/* Thông tin tác giả */}
        <View className="flex-row items-center mt-4">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-3">
            <Text className="text-sm font-semibold">Nguyễn Văn B</Text>
            <Text className="text-xs text-gray-600">Đại học điện lực</Text>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row mt-5 border-b border-gray-300">
          <TouchableOpacity
            className={`flex-1 text-center pb-2 font-bold ${
              activeTab === false
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onPress={() => setActiveTab(!activeTab)}
          >
            <Text
              className={`${
                activeTab === false ? "text-black" : "text-gray-500"
              } self-center`}
            >
              Nội dung
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 text-center pb-2 font-bold ${
              activeTab === true
                ? "border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
            onPress={() => setActiveTab(!activeTab)}
          >
            <Text
              className={`${
                activeTab === true ? "text-black" : "text-gray-500"
              } self-center`}
            >
              Kết quả
            </Text>
          </TouchableOpacity>
        </View>

        {/* Hiển thị nội dung theo tab */}
        <View className="p-4">
          {activeTab === false ? (
            <Text className="text-gray-700">Nội dung bài kiểm tra...</Text>
          ) : (
            <Text className="text-gray-700">Kết quả bài kiểm tra...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Exam;
