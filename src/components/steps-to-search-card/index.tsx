import { Ionicons } from '@expo/vector-icons'
import { boxShadow } from '@styles/boxShadow'
import { colors } from '@styles/colors'
import { Text, View } from 'react-native'

export interface IStepsToSearchCardProps {
  name: string
  steps: string[]
  tip: string
}

export default function StepsToSearchCard({
  name,
  steps,
  tip,
}: IStepsToSearchCardProps) {
  return (
    <View
      className="bg-white px-6 py-6 mx-4 rounded-2xl gap-4"
      style={boxShadow.shadow}
    >
      <Text selectable className="text-xl font-bold text-blue-950">{name}</Text>

      <View className="gap-3">
        <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Passo a passo
        </Text>
        {steps?.map((step, index) => (
          <View key={index} className="flex-row items-start gap-3">
            <View className="bg-blue-950 rounded-full w-5 h-5 items-center justify-center mt-0.5">
              <Text selectable className="text-white text-xs font-bold">{index + 1}</Text>
            </View>
            <Text selectable className="text-base text-gray-700 flex-1 leading-6">
              {step}
            </Text>
          </View>
        ))}
      </View>

      <View className="bg-blue-50 rounded-xl px-4 py-3 gap-2">
        <View className="flex-row gap-2 items-center">
          <Ionicons name="bulb-outline" size={18} color={colors.blue950} />
          <Text selectable className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Dica
          </Text>
        </View>
        <Text selectable className="text-base text-gray-700 leading-6">{tip}</Text>
      </View>
    </View>
  )
}
