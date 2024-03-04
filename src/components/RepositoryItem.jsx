import React from 'react'
import { View, StyleSheet, Image , Platform} from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  language,
  fullName,
  description,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold">{fullName}</StyledText>
      <StyledText color="secondary">{description}</StyledText>
      <StyledText style={styles.languaje}>{language}</StyledText>
    </View>
  </View>
);
const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical:5
  },
  languaje: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      anndroid:theme.colors.primary,
      ios:'orange',
      default:'purple'
    }),
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
export default RepositoryItem;
