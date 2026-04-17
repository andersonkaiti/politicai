import { Image, ScrollView, Text, View } from 'react-native'

export default function Source() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View className="w-full px-5 py-8 gap-4">
        <Image
          source={require('@assets/images/Open source-rafiki.png')}
          style={{ width: '100%', height: 220 }}
          resizeMode="contain"
        />
        <Text selectable className="text-xl font-bold text-blue-950">
          Fonte para os acessos médios
        </Text>
        <Text selectable className="text-base text-gray-700 text-justify leading-7">
          As informações de acessos médios são baseadas em estimativas gerais e
          conhecimento sobre o comportamento de tráfego desses sites durante
          períodos de relevância política, como eleições. Para dados mais
          exatos, seria necessário o uso de ferramentas como SimilarWeb ou
          Alexa, que analisam o tráfego em tempo real dos sites.
        </Text>
      </View>
    </ScrollView>
  )
}
