import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
    carouselItem: {
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1.5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 220,
        width: 300,
    },
    carouselTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black', 
        textAlign: 'center',
        top:60,
    },
    carouselContent: {
        backgroundColor: 'mintcream',
        margin: 10,
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black', 
        textAlign: 'center',
        top: 70
    },
    carouselImage: {
        flex: 1,
        width: '100%', 
        height: '100%', 
        resizeMode: 'stretch', // 이미지를 커버로 조정하여 백그라운드로 설정
    },
});

const data = [
    { title: '여행 장소', content: '사용자가 여행 장소 리뷰를 작성하고 다른 사람과 공유할 수 있습니다.', image: require('../../image/travelPlace.jpg') },
    { title: '여행 플래너', content: '나만의 여행 경로를 작성하고 다른 사용자와 공유할 수 있습니다.', image: require('../../image/mapping.jpg') },
    { title: 'AI 추천', content: '사용자 맞춤형 여행 정보를 AI가 추천해줍니다.', image: require('../../image/ai.jpg') },
];

const renderItem = ({ item }) => {
    return (
        <View style={[styles.carouselItem]}>
            {item.image && (
                <ImageBackground source={item.image} style={styles.carouselImage}>
                    <Text style={styles.carouselTitle}>{item.title}</Text>
                    <Text style={styles.carouselContent}>{item.content}</Text>
                </ImageBackground>
            )}
            {!item.image && (
                <View>
                    <Text style={styles.carouselTitle}>{item.title}</Text>
                    <Text style={styles.carouselContent}>{item.content}</Text>
                </View>
            )}
        </View>
    )
};

const CarouselView = () => {
    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={300}
            autoplay={true}
            autoplayInterval={2500}
            loop={true}
        />
    );
}

export default CarouselView;
