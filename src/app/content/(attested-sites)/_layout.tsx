import { Stack } from 'expo-router'
import { colors } from '@styles/colors'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Sites confiáveis',
          headerStyle: { backgroundColor: colors.blue950 },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="help/[name]"
        options={{
          title: 'Passo a passo',
          headerStyle: { backgroundColor: colors.blue950 },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  )
}
