import Button from '@components/button'
import { Href } from 'expo-router'
import { Image, ScrollView, Text, View } from 'react-native'

export default function Credits() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View className="w-full px-5 py-8 gap-8">
        <View className="gap-2">
          <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center">
            Docente Orientadora
          </Text>
          <Text selectable className="text-base text-gray-700 text-center">
            Prof.ª M.ª Susan Renata Lopes
          </Text>
        </View>

        <View className="gap-2">
          <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center">
            Integrantes da equipe
          </Text>
          {[
            'Anderson Kaiti',
            'Felipe Jeske Turini',
            'Lucas Gabriel Dias',
            'Luiz Felipe Florindo da Silva',
            'Umberto Passarello Neto',
          ].map((name) => (
            <Text selectable key={name} className="text-base text-gray-700 text-center">
              {name}
            </Text>
          ))}
        </View>

        <View className="gap-3">
          <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center">
            Desenvolvimento
          </Text>
          <Image
            source={require('@assets/images/ciencia_da_computacao.png')}
            style={{ width: '100%', height: 50 }}
            resizeMode="contain"
          />
        </View>

        <Button
          label="Referências"
          route={'/content/(credits)/references' as Href}
        />
      </View>
    </ScrollView>
  )
}
