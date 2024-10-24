import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Sites confiáveis",
          headerStyle: {
            backgroundColor: "#173058",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="help/[name]"
        options={{
          title: "Passo a passo",
          headerStyle: {
            backgroundColor: "#173058",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
