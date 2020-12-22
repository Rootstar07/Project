import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const titleText = useState("지지 않는 꽃");
  const bodyText = useState("사실 이건 새둥지라고 볼수없다.");
  const [ID, setID] = useState(0);

  const pressButton = () => {
    setID((ID) => ID + 1);
  };

  return (
    <Text style={styles.baseText}>
      <Text>
        {ID}쪽이네요{"\n"}
        {"\n"}
      </Text>
      <Text style={styles.titleText} onPress={pressButton}>
        다음
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
