import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import mainstroy from "./mainstory.json";
import Fade from "react-reveal/Fade";

const TextInANest = () => {
  const titleText = useState("지지 않는 꽃");
  const objec = mainstroy;

  const [value, setValue] = useState(0);
  const [bodyText, setbodyText] = useState("첫번째 이야기");
  const [chapter, setChapter] = useState(0);
  const [fun, setFun] = useState(0);

  const buttonClick = () => {
    setValue((value) => value + 1);
    setbodyText((bodyText) => bodyText + objec[value]);
    /*setStaus((status) => objec[value][value]);*/
  };

  const buttonClick2 = () => {
    setValue((value) => value + 2);
    setbodyText((bodyText) => bodyText + objec[value]);
    /*setStaus((status) => objec[value][value]);*/
  };

  const storyTeller = () => {
    return (
      <Text>
        <Text onPress={() => buttonClick()}>계속</Text>
      </Text>
    );
  };

  return (
    <View style={styles.baseView}>
      <View style={styles.uiView}></View>
      <View style={styles.storyView}>
        <Text style={styles.baseText}>
          <Fade bottom>
            <Text style={styles.titleText}>
              {titleText}
              {"\n"}
              {"\n"}
            </Text>
          </Fade>
          <Text>현재 페이지: {value}쪽</Text>
          {"\n"}
          {"\n"}
          <Text>현재 상태 : {value}</Text>
          <Text numberOfLines={5}>{bodyText}</Text>
          {"\n"}
          {"\n"}
          {storyTeller()}
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
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TextInANest;
