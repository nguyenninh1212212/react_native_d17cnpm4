import { Link } from "expo-router";
import { View, Text, ImageBackground } from "react-native";

const CardCategory = ({
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
      className=" h-20 w-20  bg-purple-300 rounded-xl  ml-2  items-center flex justify-center  "
    >
      <Link href={path as any}>
        <Text>{title}</Text>
      </Link>
    </ImageBackground>
  );
};

export default CardCategory;
