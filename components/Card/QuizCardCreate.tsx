import { QuizCardCreateProps } from "@/type/Card";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface payload {
  data: QuizCardCreateProps;
}

const QuizCardCreate: React.FC<payload> = ({ data }) => {
  const { title, user, questions, image } = data;
  return (
    <TouchableOpacity className="bg-white rounded-lg w-[48%] h-60 m-1 overflow-hidden shadow-md">
      <Image source={{ uri: image }} className="w-full h-28" />

      {/* Nội dung Card */}
      <View className="p-2 flex-1 justify-between bg-gray-100">
        {/* Thông tin người tạo */}
        <View className="flex-row items-center">
          <Image
            source={{ uri: user.avatar }}
            className="w-8 h-8 rounded-full"
          />
          <View className="ml-2">
            <Text className="text-black font-bold text-[8px]">{user.name}</Text>
            <Text className="text-gray-400 text-[10px]">{user.university}</Text>
          </View>
        </View>

        {/* Nội dung đề thi */}
        <Text className="text-black font-semibold  mt-1 text-xs line-clamp-1">
          {title}
        </Text>

        {/* Số câu hỏi */}
        <View className="bg-indigo-600 rounded-full px-3 py-1 items-center self-start">
          <Text className="text-white font-semibold text-xs">
            {questions} câu
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default QuizCardCreate;
