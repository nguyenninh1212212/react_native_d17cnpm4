import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [secureText, setSecureText] = useState(true);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Register Data:", formData);
  };

  return (
    <View className="flex-1 bg-blue-900 justify-center items-center px-5">
      <View className="w-full max-w-md  p-6 rounded-lg shadow-md">
        <Text className="text-2xl font-bold text-center text-yellow-400 mb-4">
          Đăng ký
        </Text>

        {/* Username */}
        <View className="mb-3">
          <Text className="text-gray-300 mb-1">Nhập tên tài khoản</Text>
          <TextInput
            className="w-full bg-blue-800 text-white px-3 py-3 rounded-md"
            placeholder="Nhập tài khoản..."
            placeholderTextColor="#bbb"
            value={formData.username}
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>

        {/* Email */}
        <View className="mb-3">
          <Text className="text-gray-300 mb-1">Email</Text>
          <TextInput
            className="w-full bg-blue-800 text-white px-3 py-3 rounded-md"
            placeholder="Nhập email..."
            placeholderTextColor="#bbb"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        </View>

        {/* Password */}
        <View className="mb-3">
          <Text className="text-gray-300 mb-1">Mật khẩu</Text>
          <View className="flex-row items-center bg-blue-800 rounded-md px-3  py-2">
            <TextInput
              className="flex-1 text-white py-2"
              placeholder="Nhập mật khẩu..."
              placeholderTextColor="#bbb"
              secureTextEntry={secureText}
              value={formData.password}
              onChangeText={(text) => handleChange("password", text)}
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              <MaterialIcons
                name={secureText ? "visibility-off" : "visibility"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password */}
        <View className="mb-3">
          <Text className="text-gray-300 mb-1">Nhập lại mật khẩu</Text>
          <TextInput
            className="w-full bg-blue-800 text-white px-3  py-3 rounded-md"
            placeholder="Nhập lại mật khẩu..."
            placeholderTextColor="#bbb"
            secureTextEntry
            value={formData.confirmPassword}
            onChangeText={(text) => handleChange("confirmPassword", text)}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          className="w-full bg-yellow-400 py-2 rounded-md items-center mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-gray-900 font-bold text-lg">Đăng ký</Text>
        </TouchableOpacity>
        <Link href="/(auth)/login" className="text-yellow-400 self-center mt-4">
          Đã có tài khoản?
        </Link>
        <Text className="text-center text-gray-300 my-2">hoặc đăng ký với</Text>
        <View className="flex-col justify-center space-x-5 gap-3">
          <TouchableOpacity className="bg-white p-3 text-center rounded-md w-full">
            <Text className="text-black self-center">Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-600 p-3 rounded-md w-full">
            <Text className="text-white self-center">Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
