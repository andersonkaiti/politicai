import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Créditos",
          headerStyle: {
            backgroundColor: "#173058",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="references/index"
        options={{
          title: "Referências",
          headerStyle: {
            backgroundColor: "#173058",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
