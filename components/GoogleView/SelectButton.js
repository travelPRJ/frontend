import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    place: {
      marginTop: 500,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
      width: 200,
      backgroundColor: 'skyblue'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20
    }
});


const SelectButton = () => {
    return(
        <View style={styles.place}>
            <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.text}>선택</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}

export default SelectButton;

