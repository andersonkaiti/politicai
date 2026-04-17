import { Feather, Ionicons } from '@expo/vector-icons'
import { boxShadow } from '@styles/boxShadow'
import { colors } from '@styles/colors'
import { Href, Link } from 'expo-router'
import { Linking, Pressable, Text, View } from 'react-native'

export interface ICardProps {
  name: string
  institution: string
  url: string
  averageAccess: string
}

export default function SiteSearchCard({
  name,
  institution,
  url,
  averageAccess,
}: ICardProps) {
  return (
    <View
      className="bg-white px-6 py-6 mx-4 rounded-2xl gap-4"
      style={boxShadow.shadow}
    >
      <Text selectable className="text-xl font-bold text-blue-950">{name}</Text>

      <View className="gap-1">
        <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Instituição
        </Text>
        <Text selectable className="text-base text-gray-700">{institution}</Text>
      </View>

      <View className="gap-1">
        <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Site
        </Text>
        <Pressable
          className="flex-row items-center gap-2"
          onPress={() => Linking.openURL(url)}
        >
          <Ionicons name="link-outline" size={16} color={colors.blue950} />
          <Text selectable className="text-sm text-blue-950 underline flex-shrink">
            {url}
          </Text>
        </Pressable>
      </View>

      <View className="gap-1">
        <View className="flex-row items-center gap-2">
          <Ionicons name="stats-chart-outline" size={16} color={colors.blue950} />
          <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Acessos médios
          </Text>
        </View>
        <Text selectable className="text-base text-gray-700">{averageAccess}</Text>
      </View>

      <Link
        className="bg-blue-950 w-full px-4 py-3 rounded-xl"
        href={`/content/help/${name}` as Href}
      >
        <View className="w-full flex-row gap-2 justify-center items-center">
          <Feather name="search" size={16} color="#fff" />
          <Text selectable className="text-white text-base font-semibold">
            Passo a passo
          </Text>
        </View>
      </Link>
    </View>
  )
}
