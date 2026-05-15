import { Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  cityName: string;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;

  isDark: boolean;
  onAddCity: () => void;
}
const CityForm = ({ cityName, setCityName, country, setCountry, imageUrl, setImageUrl, isDark, onAddCity}: Props) => {
  return (
    <SafeAreaView className='items-center mx-5 mb-5 gap-3'>
      
      <TextInput 
      placeholder='City name'
      value={cityName}
      onChangeText={setCityName}
      className={`border rounded-xl p-3  self-center w-96 ${
        isDark
        ? "bg-neutral-800 border-neutral-700 text-white"
        : "bg-white border-gray-300 text-black"
      }`}/>

      <TextInput 
      placeholder='Country name'
      value={country}
      onChangeText={setCountry}
      className={`border rounded-xl p-3 self-center w-96  ${
        isDark
        ? "bg-neutral-800 border-neutral-700 text-white"
        : "bg-white border-gray-300 text-black"
      }`}/>
      
      <TextInput 
        placeholder='Image URL'
        value={imageUrl}
        onChangeText={setImageUrl}
        className={`border rounded-xl p-3 self-center w-96 ${
            isDark
              ? "bg-neutral-800 border-neutral-700 text-white"
              : "bg-white border-gray-300 text-black"
        }`}/>

      <TouchableOpacity 
        onPress={onAddCity}
        className="bg-indigo-700 p-3 rounded-3xl items-center mt-2 self-center w-72">
          <Text className='text-white font-bold text-md'>
            Add City
          </Text> 
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default CityForm