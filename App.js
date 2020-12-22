import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import buttonGenerator from "./buttonGenerator";

const TextInANest = () => {
  const titleText = useState("지지 않는 꽃");
  const bodyText = useState("사실 이건 새둥지라고 볼수없다.");

  return (
    <Text style={styles.baseText}>
      <Text numberOfLines={5}>{bodyText}</Text>
      {buttonGenerator()}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TextInANest;
