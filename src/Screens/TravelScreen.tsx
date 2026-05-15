import { View, Alert, FlatList, TextInput, KeyboardAvoidingView, Platform, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import CityForm from '@/components/CityForm'
import CityCard from '@/components/CityCard'
import ListHeaderComp from '@/components/ListHeaderComp'
import EmptyList from '@/components/EmptyList'
import { cities as initialCities } from "@/data/cities";

const TravelScreen = () => {
  const [cities, setCities] = useState(initialCities);

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [search, setSearch] = useState("");

  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const addCity = () => {
    if(!cityName || !country || !imageUrl) return;
    const newCity = {
      id: Date.now().toString(),
      cityName,
      country,
      imageUrl,
      visited: false,
    };

    setCities([...cities, newCity]);

    setCityName("");
    setCountry("");
    setImageUrl("");
  };

  const toggleVisited = (id: string) => {
    setCities(
      cities.map((city) => city.id === id ? {
        ...city,
        visited: !city.visited,
      } : city
      )
    );
  };

  const visitedCities = cities.filter(
    (city) => city.visited
  ).length;

  const filteredCities = cities
  .filter((city) =>
    city.cityName
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .sort(
    (a, b) =>
      Number(a.visited) - Number(b.visited)
  );

  const deleteCity = (id: string) => {

    if (Platform.OS === "web") {

      const confirmed = window.confirm(
        "Do you want to delete this city?"
      );

    if (confirmed) {
      setCities((prevCities) =>
        prevCities.filter(
          (city) => city.id !== id
        )
      );
    }

    return;
  }

  Alert.alert(
    "Delete",
    "Do you want to delete this city?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",

        onPress: () => {
          setCities((prevCities) =>
            prevCities.filter(
              (city) => city.id !== id
            )
          );
        },
      },
    ]
  );
};
  return (
    <SafeAreaView className={`flex-1 ${
        isDark ? "bg-neutral-900" : "bg-gray-100"
      }`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className='flex-1'
      >
          <Header isDark={isDark}/>
          <CityForm
            cityName={cityName}
            setCityName={setCityName}
            country={country}
            setCountry={setCountry}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            isDark={isDark}
            onAddCity={addCity}
          />
      
          <View className='items-center mb-3 '>
            <TextInput
            placeholder="Search city..."
            value={search}
            onChangeText={setSearch}
            className={`mx-4 mb-4 border border-gray-300 rounded-xl p-3 w-[75%] ${
              isDark ? "bg-neutral-800 border-neutral-700 text-white" 
                    : "bg-white border-gray-300 text-black"
              }`}
          />
          </View>
          

        <FlatList
        data={filteredCities}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyList/>}
        renderItem={({ item }) => (
            <CityCard 
              city={item}
              isDark={isDark}
              onToggleVisited={() => 
                toggleVisited(item.id)
              }
              onDelete={() => 
                deleteCity(item.id)
              }/>
        )}
        
        ListHeaderComponent={<ListHeaderComp
          totalCities={cities.length}
          visitedCities={visitedCities}
        />}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom:30,
        }}
        
      />
      

      </KeyboardAvoidingView>
      
    </SafeAreaView>
  )
}

export default TravelScreen