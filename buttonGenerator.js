import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const buttonGenerator = () => {
  const [ID, setID] = useState(0);

  const pressButton = () => {
    setID((ID) => ID + 1);
  };

  return (
    <Text>
      <Text>
        {ID}쪽이네요!{"\n"}
        {"\n"}
      </Text>
      <Text style={styles.titleText} onPress={pressButton}>
        {"\n"}
        다음
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default buttonGenerator;
