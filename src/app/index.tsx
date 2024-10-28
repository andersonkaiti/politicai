import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";

export default function Presentation() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View className="w-full justify-center items-center gap-8 px-4 py-8">
        <StatusBar barStyle="dark-content" />
        <Image
          source={require("@assets/images/Political debate-cuate.png")}
          style={{ width: "100%", height: 350 }}
        />
        <Text className="text-justify text-xl">
          PoliticAI é seu guia completo para informações essenciais sobre
          eleições, política e cidadania. Em um só lugar, você encontra conteúdo
          prático e confiável para conhecer candidatos, entender o processo
          eleitoral e acompanhar as últimas atualizações.
        </Text>
        <Text className="text-center text-2xl font-bold text-[#173058]">
          Por que usar?
        </Text>
        <Text className="text-justify text-xl">
          O aplicativo oferece acesso direto a fontes confiáveis, como o
          Tribunal Superior Eleitoral e o Portal da Transparência, além de guias
          detalhados para encontrar informações específicas sobre candidatos e
          resultados eleitorais. O PoliticAI foi criado para fortalecer sua
          participação cidadã, promovendo decisões informadas e conscientes.
        </Text>
        <Text className="text-center text-2xl font-bold text-[#173058]">
          Principais Recursos
        </Text>
        <View className="flex-col gap-4">
          <Text className="text-justify text-xl">
            <Text className="font-bold text-[#173058]">Fontes Confiáveis:</Text>{" "}
            Acesso rápido aos principais sites de informação política no Brasil.
          </Text>
          <Text className="text-justify text-xl">
            <Text className="font-bold text-[#173058]">
              Guias de Navegação:
            </Text>{" "}
            Passo a passo prático para acessar dados específicos e conhecer
            melhor os candidatos e processos eleitorais.
          </Text>
        </View>
        <Link className="bg-[#173058] px-4 py-4 rounded-full" href={"/content"}>
          <View className="w-full flex-row gap-2 justify-center items-center">
            <Ionicons name="chevron-up-outline" size={20} color="#fff" />
            <Text className="text-white text-xl">Próximo</Text>
          </View>
        </Link>
      </View>
    </ScrollView>
  );
}
