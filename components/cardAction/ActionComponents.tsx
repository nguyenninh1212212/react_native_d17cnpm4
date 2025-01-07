import { Link } from "expo-router";
import { Text, SafeAreaView, View, Image, ImageBackground } from "react-native";

const ActionComponents = ({
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
      className=" h-32 bg-primary_250  rounded-xl overflow-hidden   items-center  justify-center "
    >
      <View className="w-full  h-full items-center justify-center gap-y-2">
        <Image source={img as any} className=" h-16 w-16 " />
        <Text className="text-white">{title}</Text>
      </View>
    </Link>
  );
};

export default ActionComponents;
