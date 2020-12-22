import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import mainstory from "./mainstory.json";
import Fade from "react-reveal/Fade";

const TextInANest = () => {
  const titleText = useState("지지 않는 꽃");
  const [bodyText, setbodyText] = useState("첫번째 이야기");

  //메인스토리.json ID 관리
  const [ID, setID] = useState(0);

  const buttonClick = () => {
    setID((ID) => ID + 1); // 1 대신 다음 버튼 아이디로
    setbodyText((bodyText) => bodyText);
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
          <Text>{bodyText}</Text>
          {"\n"}
          {"\n"}
          <Text onPress={buttonClick()}>123</Text>
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
