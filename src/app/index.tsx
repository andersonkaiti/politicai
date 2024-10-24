import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, StatusBar, Text, View } from "react-native";

export default function Presentation() {
  return (
    <View
      style={{ flex: 1 }}
      className="w-full justify-center items-center gap-8"
    >
      <StatusBar barStyle="dark-content" />
      <Image
        source={require("@assets/images/Political debate-cuate.png")}
        style={{ width: "100%", height: 350 }}
      />
      <Text className="text-justify text-xl px-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        ratione minima veritatis molestiae adipisci libero, temporibus itaque
        explicabo iure delectus minus expedita id omnis odio ad. Architecto, et
        eos? Nihil?
      </Text>
      <Link className="bg-[#173058] px-4 py-4 rounded-full" href={"/content"}>
        <View className="w-full flex-row gap-2 justify-center items-center">
          <Ionicons name="chevron-up-outline" size={20} color="#fff" />
          <Text className="text-white text-xl">Próximo</Text>
        </View>
      </Link>
    </View>
  );
}
