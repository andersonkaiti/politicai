import importance from '@assets/data/importancia-voto.json'
import { Image, ScrollView, Text, View } from 'react-native'

export default function Importance() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View className="w-full px-5 pb-8 gap-6">
        <Image
          source={require('@assets/images/Political debate-pana.png')}
          style={{ width: '100%', height: 260 }}
          resizeMode="contain"
        />
        {importance?.map(({ title, text }, index) => (
          <View key={index} className="gap-2">
            <Text selectable className="text-xl font-bold text-blue-950">{title}</Text>
            <Text selectable className="text-base text-gray-700 text-justify leading-7">
              {text}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
