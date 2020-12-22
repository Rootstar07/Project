import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const pressButton = () => {};

const TextInANest = () => {
  const titleText = useState("지지 않는 꽃");
  const bodyText = useState("사실 이건 새둥지라고 볼수없다.");
  const [ID, setID] = useState(0);

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={pressButton}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TextInANest;
