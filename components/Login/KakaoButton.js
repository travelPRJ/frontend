import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

import Kakao from "../../image/kakao.png";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  socialView: {
    borderRadius: 6,
    marginTop: 30,
  },
});

const KakaoButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.socialView}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("KaKaoLogin", { screen: "KaKaoLogin" })
        }
      >
        <Image source={Kakao} />
      </TouchableOpacity>
    </View>
  );
};

export default KakaoButton;