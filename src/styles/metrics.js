import { Dimensions } from "react-native/types";

const screenWidth = Dimensions.get('window').width
export const parameters = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    screenWidth: screenWidth
  },
};
