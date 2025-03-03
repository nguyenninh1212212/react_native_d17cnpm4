import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View className="flex-1 bg-[#0C1D57] p-4">
      {/* Thanh tìm kiếm */}
      <View className="flex-row items-center bg-white p-2 rounded-lg mb-3">
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          className="flex-1 text-black"
        />
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Các bộ lọc */}
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity className="bg-yellow-500 px-4 py-2 rounded-lg">
          <Text className="text-black font-bold">Mới nhất</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-500 px-4 py-2 rounded-lg">
          <Text className="text-white font-bold">Cơ bản</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-yellow-800 px-4 py-2 rounded-lg">
          <Text className="text-white font-bold">Tìm nhiều nhất</Text>
        </TouchableOpacity>
      </View>

      {/* Kết quả tìm kiếm */}
      <Text className="text-white font-bold text-lg mb-3">Kết quả</Text>
      <ScrollView className="space-y-3">
        {[...Array(5)].map((_, index) => (
          <View
            key={index}
            className="bg-[#1A2C80] p-3 rounded-lg flex-row items-center"
          >
            <View className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Text className="text-white font-bold text-lg">HTML</Text>
            </View>
            <View className="ml-3 flex-1">
              <Text className="text-white font-bold">What is HTML/CSS?</Text>
              <Text className="text-gray-300">Nguyễn Minh - 10 phút trước</Text>
            </View>
            <View className="bg-yellow-500 px-2 py-1 rounded-full">
              <Text className="text-black font-bold">4.5</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
    