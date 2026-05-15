import { View, Text } from 'react-native'
import React from 'react'

type Props = {
    isDark: boolean;
};

const Header = ({ isDark }: Props) => {
  return (
    <View className='mx-5 my-6 flex items-center'>
        <Text className={`text-4xl font-bold text-center ${
            isDark ? "text-white" : "text-black"
        }`}>
            Travel Journal
        </Text>
        <Text className={` text-sm mt-0.5 ${
            isDark ? "text-gray-400" : "text-black"
        }`}>
        
                Explore and track your dream cities!
        </Text>
    </View>
  )
}

export default Header