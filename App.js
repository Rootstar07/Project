import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import mainstroy from "./mainstory.json";
import Fade from "react-reveal/Fade";

const TextInANest = () => {
  const titleText = useState("지지 않는 꽃");
  const object = mainstroy;

  const [ID, setID] = useState(0);
  const [bodyText, setbodyText] = useState("첫번째 이야기");

  /*메인스토리.json ID 관리*/
  let eventLine = mainstroy[ID].story;
  let buttonID = mainstroy[ID].Button;

  const buttonClick = () => {
    setID((ID) => ID + 1);
    setbodyText((bodyText) => bodyText + eventLine);
  };

  const buttonClick2 = () => {
    setID((ID) => ID + 2);
    setbodyText((bodyText) => bodyText + object[ID]);
  };

  const buttonMaker = () => {
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
          <Text>현재 페이지: {ID}쪽</Text>
          {"\n"}
          {"\n"}
          <Text>현재 상태 : {ID}</Text>
          <Text numberOfLines={5}>{bodyText}</Text>
          {"\n"}
          {"\n"}
          {buttonMaker()}
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
