import { Text, ScrollView, View, Image, StatusBar } from "react-native";
import importance from "@/assets/data/importancia-voto.json";

export default function Importance() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />
      <View className="w-full px-4 pb-8 flex gap-4">
        <View className="object-contain overflow-hidden w-full flex items-center">
          <Image
            source={require("@/assets/images/Political debate-pana.png")}
            style={{ width: "100%", height: 288 }}
          />
        </View>
        {importance?.map(({ title, text }, index) => (
          <View key={index}>
            <Text className="mb-4 text-center text-2xl font-bold text-[#173058]">
              {title}
            </Text>
            <Text className="text-justify text-xl" key={index}>
              {text}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
