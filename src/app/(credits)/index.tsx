import Button from "@/components/button";
import { Image, Text, View } from "react-native";

export default function Credits() {
  return (
    <View className="w-full h-full px-4 py-4 gap-4 justify-evenly">
      <Text className="text-center text-2xl font-bold text-[#173058]">
        Docente Orientadora
      </Text>
      <Text className="text-center text-xl">Profa. Susan Renata Lopes</Text>
      <Text className="text-center text-2xl font-bold text-[#173058]">
        Integrantes da equipe
      </Text>
      <Text className="text-center text-xl">Anderson Kaiti</Text>
      <Text className="text-center text-xl">Felipe Jeske Turini</Text>
      <Text className="text-center text-xl">Lucas Gabriel Dias</Text>
      <Text className="text-center text-xl">Luiz Felipe Florindo da Silva</Text>
      <Text className="text-center text-xl">Umberto Passarello Neto</Text>
      <Text className="text-center text-2xl font-bold text-[#173058]">
        Desenvolvimento
      </Text>
      <Image
        source={require("@/assets/images/ciencia_da_computacao.png")}
        style={{ width: "100%", height: 50 }}
      />
      <Button
        label="Referências"
        route="/(credits)/references"
      />
    </View>
  );
}
