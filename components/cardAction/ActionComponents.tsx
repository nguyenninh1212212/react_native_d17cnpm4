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
    <ImageBackground
      source={img as any}
      className=" h-32 bg-purple-300 rounded-xl  ml-2  items-center flex justify-center "
    >
      <Link href={path as any}>
        <Text>{title}</Text>
      </Link>
    </ImageBackground>
  );
};

export default ActionComponents;
