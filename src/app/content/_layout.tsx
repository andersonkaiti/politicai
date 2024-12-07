import { Tabs } from "expo-router";
import "@styles/global.css";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

export default function IndexLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            height: 50,
            paddingBottom: 5,
          },
        }}
      >
        <Tabs.Screen
          name="(attested-sites)"
          options={{
            title: "Sites confiáveis",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="globe-outline" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="help/index"
          options={{
            title: "Passo a passo",
            tabBarIcon: ({ color }) => (
              <Ionicons name="footsteps-outline" color={color} size={24} />
            ),
            headerStyle: {
              backgroundColor: "#173058",
            },
            headerTintColor: "#fff",
          }}
        />
        <Tabs.Screen
          name="importance/index"
          options={{
            title: "Importância",
            tabBarIcon: ({ color }) => (
              <Ionicons name="star-outline" color={color} size={24} />
            ),
            headerStyle: {
              backgroundColor: "#173058",
            },
            headerTintColor: "#fff",
          }}
        />
        <Tabs.Screen
          name="source/index"
          options={{
            title: "Fontes",
            tabBarIcon: ({ color }) => (
              <Ionicons name="book-outline" color={color} size={24} />
            ),
            headerStyle: {
              backgroundColor: "#173058",
            },
            headerTintColor: "#fff",
          }}
        />
        <Tabs.Screen
          name="(credits)"
          options={{
            title: "Créditos",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="information-outline" color={color} size={24} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
