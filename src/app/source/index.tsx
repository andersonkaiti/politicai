import { Image, ScrollView, StatusBar, Text, View } from "react-native";

export default function Source() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View className="w-full px-4 py-8 flex justify-center items-center gap-4">
        <StatusBar barStyle="light-content" />
        <Image
          source={require("@/assets/images/Open source-rafiki.png")}
          style={{ width: "100%", height: 200 }}
        />
        <Text className="text-center text-2xl font-bold text-[#173058]">
          Fonte para os acessos médios:
        </Text>
        <Text className="text-justify text-xl">
          As informações de acessos médios são baseadas em estimativas gerais e
          conhecimento sobre o comportamento de tráfego desses sites durante
          períodos de relevância política, como eleições. Para dados mais
          exatos, seria necessário o uso de ferramentas como SimilarWeb ou
          Alexa, que analisam o tráfego em tempo real dos sites.
        </Text>
      </View>
    </ScrollView>
  );
}
