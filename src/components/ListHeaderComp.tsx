import { Text } from "react-native";
import React from "react";

type Props = {
  totalCities: number;
  visitedCities: number;
};

const ListHeaderComp = ({ totalCities, visitedCities }: Props) => {
  return (
    <Text className="mb-3 text-gray-500 text-center font-semibold">
      {visitedCities} / {totalCities} cities visited
    </Text>
  );
};

export default ListHeaderComp;