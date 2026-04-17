import { Stack } from 'expo-router'
import { colors } from '@styles/colors'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Créditos',
          headerStyle: { backgroundColor: colors.blue950 },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="references/index"
        options={{
          title: 'Referências',
          headerStyle: { backgroundColor: colors.blue950 },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  )
}
