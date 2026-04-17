import '@styles/global.css'

import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '@styles/colors'

export default function IndexLayout() {
  const insets = useSafeAreaInsets()

  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.blue950,
          tabBarInactiveTintColor: '#9ca3af',
          tabBarStyle: {
            height: 50 + insets.bottom,
            paddingBottom: 5 + insets.bottom,
            borderTopColor: '#e5e7eb',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tabs.Screen
          name="(attested-sites)"
          options={{
            title: 'Sites confiáveis',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="globe-outline" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="help/index"
          options={{
            title: 'Passo a passo',
            tabBarIcon: ({ color }) => (
              <Ionicons name="footsteps-outline" color={color} size={24} />
            ),
            headerStyle: {
              backgroundColor: colors.blue950,
            },
            headerTintColor: '#fff',
          }}
        />
        <Tabs.Screen
          name="importance/index"
          options={{
            title: 'Importância',
            tabBarIcon: ({ color }) => (
              <Ionicons name="star-outline" color={color} size={24} />
            ),
            headerStyle: {
              backgroundColor: colors.blue950,
            },
            headerTintColor: '#fff',
          }}
        />
        <Tabs.Screen
          name="source/index"
          options={{
            title: 'Fontes',
            tabBarIcon: ({ color }) => (
              <Ionicons name="book-outline" color={color} size={24} />
            ),
            headerStyle: {
              backgroundColor: colors.blue950,
            },
            headerTintColor: '#fff',
          }}
        />
        <Tabs.Screen
          name="(credits)"
          options={{
            title: 'Créditos',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-outline" color={color} size={24} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}
