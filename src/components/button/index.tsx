import { Href, Link } from 'expo-router'
import { Text } from 'react-native'

export interface IButtonProps {
  label: string
  route: Href
}

export default function Button({ label, route }: IButtonProps) {
  return (
    <Link
      className="bg-blue-950 w-full px-10 py-4 text-center rounded-3xl"
      href={route}
    >
      <Text className="text-lg text-white font-semibold">{label}</Text>
    </Link>
  )
}
