import React from 'react'
import { View,StyleSheet } from "react-native";
import StyledText from "./StyledText";

const parseThousands= value=>{
    return value >= 1000
    ? `${Math.round(value/100)/10}k`
    : String(value)
}
const RepositoryStats = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText aling='center'  fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText aling='center' small>Stars:</StyledText>
      </View>
      <View>
        <StyledText aling='center'  fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText aling='center' small>Forks:</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>{props.reviewCount}</StyledText>
        <StyledText aling='center' small >Review:</StyledText>
      </View>
      <View>
        <StyledText aling='center'  fontWeight='bold'>{props.ratingAverage}</StyledText>
        <StyledText aling='center' small>Rating:</StyledText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:"space-around"
    },
  });
export default RepositoryStats;