import React from "react";
import { StyleSheet, View } from "react-native";

export const Bar = ({ barStyle }) => {
  return (
    <View style={BarStyles.barContainer}>
      <View style={[BarStyles.bar, barStyle]} />
    </View>
  );
};

const BarStyles = StyleSheet.create({
  barContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: "18%",
    height: 6,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#e2e2e2",
  },
});
