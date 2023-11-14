import React from "react";
import { View, StyleSheet, Text, ImageBackground, FlatList } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: 303,
        height: 270,
        borderRadius: 5,
        borderWidth: 1.5,
      },
      itemContainer: {
        width: 300,
        height: 250,
        paddingLeft: 5,
        paddingRight: 5
      },
      image: {  // 사진
        width: "100%",
        height: "110%",
        resizeMode: "stretch",
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {  //제목
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        color: "black",
        position: "absolute",
        top: 40,
        
      },
      content: { //내용
        backgroundColor : 'mintcream',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10,
        color: 'black', 
        textAlign: 'center',
        position: "absolute",
        bottom: 30,
      },
});

const data = [
    { title: '여행 장소', content: '사용자가 여행 장소 리뷰를 작성하고 다른 사람과 공유할 수 있습니다.', image: require('../../image/travelPlace.jpg') },
    { title: '여행 플래너', content: '나만의 여행 경로를 작성하고 다른 사용자와 공유할 수 있습니다.', image: require('../../image/mapping.jpg') },
    { title: 'AI 추천', content: '사용자 맞춤형 여행 정보를 AI가 추천해줍니다.', image: require('../../image/ai.jpg') },
];



const CarouselView = () => {
    
    return (
        <View style={styles.container}>
        <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ImageBackground source={item.image} style={styles.image}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
              </ImageBackground>
            </View>
          )}
        />
      </View>
    );
}

export default CarouselView;
