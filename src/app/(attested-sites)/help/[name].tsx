import { Text, View } from "react-native";
import stepsSearch from "@/assets/data/steps-search.json";
import { useLocalSearchParams } from "expo-router";
import StepsToSearchCard from "@/components/steps-to-search-card";

export default function Help() {
  const { name } = useLocalSearchParams();

  const searchResult = stepsSearch.find((step) => step.name === name);

  if (!searchResult) {
    return (
      <View className="bg-[#cbc8c8] px-4 py-4 rounded-md">
        <Text className="text-2xl font-bold">Ajuda não encontrada</Text>
      </View>
    );
  }

  const { steps, tip } = searchResult;

  return (
    <View className="my-4">
      <StepsToSearchCard name={name as string} steps={steps} tip={tip} />
    </View>
  );
}
