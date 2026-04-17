import { Link } from 'expo-router'
import { Href } from 'expo-router'
import { Text } from 'react-native'

export interface IButtonProps {
  label: string
  route: Href
}

export default function Button({ label, route }: IButtonProps) {
  return (
    <Link
      className="bg-[#173058] w-full px-10 py-4 text-center rounded-3xl"
      href={route}
    >
      <Text className="text-2xl text-white font-bold">
        {label.toLocaleUpperCase()}
      </Text>
    </Link>
  )
}
