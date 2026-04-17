import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Presentation() {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <View className="w-full justify-center items-center gap-6 px-5 py-8">
          <Image
            source={require('@assets/images/Political debate-cuate.png')}
            style={{ width: '100%', height: 300 }}
            resizeMode="contain"
          />

          <Text selectable className="text-base text-gray-700 text-justify leading-7">
            PoliticAI é seu guia completo para informações essenciais sobre
            eleições, política e cidadania. Em um só lugar, você encontra
            conteúdo prático e confiável para conhecer candidatos, entender o
            processo eleitoral e acompanhar as últimas atualizações.
          </Text>

          <Text selectable className="text-2xl font-bold text-blue-950 self-start">
            Por que usar?
          </Text>
          <Text selectable className="text-base text-gray-700 text-justify leading-7">
            O aplicativo oferece acesso direto a fontes confiáveis, como o
            Tribunal Superior Eleitoral e o Portal da Transparência, além de
            guias detalhados para encontrar informações específicas sobre
            candidatos e resultados eleitorais. O PoliticAI foi criado para
            fortalecer sua participação cidadã, promovendo decisões informadas e
            conscientes.
          </Text>

          <Text selectable className="text-2xl font-bold text-blue-950 self-start">
            Principais Recursos
          </Text>
          <View className="gap-3 w-full">
            <Text selectable className="text-base text-gray-700 text-justify leading-7">
              <Text selectable className="font-semibold text-blue-950">
                Fontes Confiáveis:{' '}
              </Text>
              Acesso rápido aos principais sites de informação política no
              Brasil.
            </Text>
            <Text selectable className="text-base text-gray-700 text-justify leading-7">
              <Text selectable className="font-semibold text-blue-950">
                Guias de Navegação:{' '}
              </Text>
              Passo a passo prático para acessar dados específicos e conhecer
              melhor os candidatos e processos eleitorais.
            </Text>
          </View>

          <Link className="bg-blue-950 px-8 py-4 rounded-full" href="/content">
            <View className="flex-row gap-2 justify-center items-center">
              <Text selectable className="text-white text-base font-semibold">Próximo</Text>
              <Ionicons name="arrow-forward-outline" size={18} color="#fff" />
            </View>
          </Link>
        </View>
      </ScrollView>
    </View>
  )
}
