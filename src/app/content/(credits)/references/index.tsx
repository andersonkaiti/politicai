import { Ionicons } from '@expo/vector-icons'
import references from '@assets/data/references.json'
import { Linking, Pressable, Text, View } from 'react-native'

export default function References() {
  return (
    <View className="w-full h-full px-5 py-6 gap-3">
      {references.map(({ link, label }, index) => (
        <Pressable
          key={index}
          className="bg-blue-950 w-full px-6 py-4 rounded-xl flex-row items-center justify-between gap-4"
          onPress={() => Linking.openURL(link)}
        >
          <Text selectable className="text-base text-white font-semibold flex-1">
            {label}
          </Text>
          <Ionicons
            name="open-outline"
            size={18}
            color="#fff"
          />
        </Pressable>
      ))}
    </View>
  )
}
