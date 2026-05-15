import { View, Text } from "react-native";
import React from "react";

const EmptyList = () => {
  return (
    <View className="items-center mt-10">
      <Text className="text-lg font-semibold">
        No cities yet.
      </Text>

      <Text className="text-gray-500 mt-2">
        Add your first dream destination!
      </Text>
    </View>
  );
};

export default EmptyList;