import { FlatList, View } from "react-native";
import stepsSearch from "@assets/data/steps-search.json";
import StepsToSearchCard from "@components/steps-to-search-card";

export default function Help() {
  return (
    <View>
      <FlatList
        data={stepsSearch}
        renderItem={({ item }) => (
          <StepsToSearchCard
            name={item.name}
            steps={item.steps}
            tip={item.tip}
          />
        )}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        ItemSeparatorComponent={() => <View className="my-2" />}
        ListHeaderComponent={() => <View className="mt-4" />}
        ListFooterComponent={() => <View className="mb-4" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
