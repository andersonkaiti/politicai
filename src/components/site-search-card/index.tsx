import { styles } from "@/styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Linking, Pressable, Text, View } from "react-native";

export interface ICardProps {
  name: string;
  institution: string;
  url: string;
  averageAccess: string;
}

export default function SiteSearchCard({
  name,
  institution,
  url,
  averageAccess,
}: ICardProps) {
  return (
    <View
      className="bg-white px-8 py-8 mx-4 rounded-2xl gap-4"
      style={styles.shadow}
    >
      <Text className="text-2xl font-bold text-[#767676]">{name}</Text>
      <View className="py-4 gap-2">
        <Text className="font-bold text-xl">Instituição:</Text>
        <Text className="text-[#767676] text-xl">{institution}</Text>
      </View>
      <View className="pb-2 flex-row items-center gap-2">
        <Ionicons name="link-outline" size={20} color="##173058" />
        <Pressable onPress={() => Linking.openURL(url)}>
          <Text className="text-[#173058] text-lg">{url}</Text>
        </Pressable>
      </View>
      <View className="gap-2">
        <View className="flex-row items-center gap-2">
          <Ionicons name="stats-chart-outline" color="#173058" />
          <Text className="font-bold text-xl">Acessos médios:</Text>
        </View>
        <Text className="text-justify text-[#767676] text-xl">
          {averageAccess}
        </Text>
      </View>
      <Link
        className="bg-[#173058] w-full px-4 py-2 rounded-md"
        href={`/help/${name}`}
      >
        <View className="w-full flex-row gap-2 justify-center items-center">
          <Feather name="search" size={20} color="#fff" />
          <Text className="text-white text-xl">Passo a passo</Text>
        </View>
      </Link>
    </View>
  );
}
