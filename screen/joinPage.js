import { useState } from "react";
import { Text } from "react-native";
import { View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const JoinPage = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>닉네임</Text>
      <View style={styles.box}>
        <TextInput style={styles.input} placeholder="닉네임을 입력해 주세요." />
        <TouchableOpacity style={styles.button}>
          <Text>중복확인</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>생일</Text>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder="ex) 1999-06-02"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default JoinPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "15%",
    alignContent: "center",
    justifyContent: "center",
  },
  box: {
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    borderRadius: 8,
    height: 40,
    width: "70%",
    marginHorizontal: "5%",
    borderWidth: 1,
    padding: 10,
  },
  text: {
    marginTop: 12,
    marginLeft: "5%",
  },
  button: {
    backgroundColor: "skyblue", // 버튼 배경색
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});