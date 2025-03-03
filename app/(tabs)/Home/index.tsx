import React from "react";
import { View, Text, TextInput, ScrollView, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import QuizCard from "@/components/Card/QuizCard";
import QuizCardCreate from "@/components/Card/QuizCardCreate";
import { fakeQuizCreatedData } from "@/fakedata";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const route = useRouter();
  return (
    <ScrollView className="flex-1  bg-primary_200 ">
      {/* Header */}
      <View className="bg-primary_100 mt-[1%] ">
        <View className="bg-primary_200 px-6 pt-12 pb-10 rounded-b-[60px]">
          <Text className="text-white font-bold text-3xl ">Quizz App</Text>
          <View className="flex-row items-center bg-white rounded-md p-3 mt-3">
            <Feather name="search" size={20} color="gray" />
            <TextInput
              className="flex-1 ml-2 text-gray-700"
              placeholder="Tìm kiếm đề thi..."
              onPress={() => route.push("/Home/_search")}
            />
          </View>
        </View>

        {/* Nội dung chính */}
        <View className="px-6  bg-primary_100 mt-5">
          {/* Đề đã làm */}
          <Text className="text-white text-xl font-semibold mb-2">
            Đề đã làm
          </Text>
          <View className="flex-col rounded-xl p-1 min-h-[200px]">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <QuizCard key={index} />
              ))}
          </View>

          {/* Đề mới */}
          <Text className="text-white text-xl font-semibold py-4">
            Đề đã tạo
          </Text>
          <View className="pb-40 ">
            <FlatList
              data={fakeQuizCreatedData}
              numColumns={2} // 4 phần tử trên mỗi dòng
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <QuizCardCreate data={item} />}
              scrollEnabled={false} // Tắt cuộn riêng, để ScrollView cuộn toàn bộ
              nestedScrollEnabled={true}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
