import { Ionicons } from "@expo/vector-icons";
import { boxShadow } from "@styles/boxShadow";
import { Text, View } from "react-native";

export interface IStepsToSearchCardProps {
  name: string;
  steps: string[];
  tip: string;
}

export default function StepsToSearchCard({
  name,
  steps,
  tip,
}: IStepsToSearchCardProps) {
  return (
    <View
      className="bg-white px-8 py-8 mx-4 rounded-2xl gap-4"
      style={boxShadow.shadow}
    >
      <Text className="text-2xl font-bold text-[#767676]">{name}</Text>
      <View className="py-4">
        <Text className="font-bold text-xl mb-2">Passo a passo:</Text>
        <View className="flex-col gap-2 ml-2">
          {steps?.map((step, index) => (
            <Text className="text-justify text-xl text-[#767676]" key={index}>
              <Ionicons name="caret-forward-outline" color="#173058" />
              {step}
            </Text>
          ))}
        </View>
      </View>
      <View className="flex-col gap-2 justify-center items-start">
        <View className="flex-row gap-2 items-start">
          <Ionicons name="bulb-outline" size={20} color="#173058" />
          <Text className="font-bold text-xl">Dica:</Text>
        </View>
        <Text className="text-justify text-xl text-[#767676]">{tip}</Text>
      </View>
    </View>
  );
}
