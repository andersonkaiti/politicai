import { FlatList, View } from "react-native";
import sites from "@assets/data/sites.json";
import SiteSearchCard from "@components/site-search-card";

export default function SiteSearchCards() {
  return (
    <View>
      <FlatList
        data={sites}
        renderItem={({ item }) => (
          <SiteSearchCard
            name={item.name}
            institution={item.institution}
            url={item.url}
            averageAccess={item["average-access"]}
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
