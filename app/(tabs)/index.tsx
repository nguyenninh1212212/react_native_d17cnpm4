import { Text, SafeAreaView, View } from "react-native";

const HomeScreeen = () => {
  return (
    <SafeAreaView>
      <View className="w-screen h-screen flex justify-center items-center bg-blue-400">
        <Text className="text-red-500 bg-p">Nguyễn An Ninh</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreeen;
