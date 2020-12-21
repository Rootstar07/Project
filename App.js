import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";

let content = "사실 새장이다";

const TextInANest = () => {
  const titleText = useState("지지 않는 꽃");
  const bodyText = useState(content);

  const [bodyText2, setbodyText2] = useState("첫번째 이야기");
  const arr = ["1", "2", "3"];

  const [value, setValue] = useState(0);

  const onIncrease = () => {
    setValue((value) => value + 1);
    setbodyText2((bodyText2) => bodyText2 + arr[value]);
  };

  return (
    <View style={styles.baseView}>
      <View style={styles.uiView}></View>
      <View style={styles.storyView}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {titleText}
            {"\n"}
            {"\n"}
          </Text>
          <View>현재 카운터 값은 {value}입니다.</View>
          {"\n"}
          {"\n"}
          <View>현재 이야기 : {bodyText2}</View>
          {"\n"}
          {"\n"}
          <Text numberOfLines={5}>{bodyText}</Text>
          <Text onPress={() => onIncrease()}>
            {"\n"}
            {"\n"}
            카운터 늘리기
          </Text>

          <Text onPress={() => setbodyText2(bodyText2 + arr[value])}>
            {"\n"}
            {"\n"}
            다음 이야기
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uiView: {
    flex: 1,
    backgroundColor: "grey",
  },

  baseView: {
    flex: 1,
  },

  storyView: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TextInANest;
