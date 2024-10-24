import references from "@assets/data/references.json";
import { Linking, Pressable, Text, View } from "react-native";

export default function References() {
  return (
    <View className="w-full h-full px-4 py-4 gap-4 justify-evenly">
      {references.map(({ link, label }, index) => (
        <Pressable
          key={index}
          className="bg-[#173058] w-full px-10 py-4 text-center rounded-3xl"
          onPress={() => Linking.openURL(link)}
        >
          <Text className="text-2xl text-center text-white font-bold">
            {label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
