import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

type Props = {
  city: {
    id: string;
    cityName: string;
    country: string;
    imageUrl: string;
    visited: boolean;
  };

  isDark: boolean;
  onToggleVisited: () => void;
  onDelete: () => void;
};

const CityCard = ({
  city,
  isDark,
  onToggleVisited,
  onDelete,
}: Props) => {
  return (
    <View
      className={`p-4 mb-4 rounded-3xl border self-center w-[88%] shadow-sm ${
        isDark
          ? "bg-neutral-800 border-neutral-700"
          : "bg-white border-gray-200"
      }`}
    >
      
      <Pressable
        onPress={onDelete}
        className="absolute right-6 top-6 z-10"
      >
        <Feather
          name="trash-2"
          size={20}
          color="#ef4444"
        />
      </Pressable>

      <View className="flex-row items-center">

        <Image
          source={{ uri: city.imageUrl }}
          className="w-28 h-28 rounded-2xl mr-4"
        />

        <View className="flex-1">

          <Text
            className={`text-2xl font-semibold ${
              city.visited
                ? "line-through text-gray-400"
                : isDark
                ? "text-white"
                : "text-black"
            }`}
          >
            {city.cityName}
          </Text>

          <Text
            className={`mt-1 ${
              isDark
                ? "text-gray-300"
                : "text-gray-500"
            }`}
          >
            {city.country}
          </Text>

          <Pressable
            onPress={onToggleVisited}
            className={`mt-4 py-2 px-10 rounded-full self-start ${
              city.visited
                ? "bg-rose-600"
                : "bg-emerald-600"
            }`}
          >
            <Text className="text-white font-semibold">
              {city.visited
                ? "Visited"
                : "Not Visited"}
            </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
};

export default CityCard;