import { View, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TextInput, Image, Modal } from "react-native";
import { useState, useEffect } from 'react';
import Title from "../components/PlannerRead/Title";
import ScrapButton from "../components/PlannerRead/ScrapButton";
import PlannerDay from "../components/PlannerRead/PlannerDay";
import ReadLoc from "../components/PlannerRead/ReadLoc";
import ReadMap from "../components/PlannerRead/ReadMap";
import axios from "axios";
import { ip } from "../src/config/ip";

// 기숙사 192.168.1.9
// 학교 172.16.104.127
// 학교 10.20.104.162

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    rowView: {
      flexDirection: 'row'
    },
    mapview: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 24.5,
      height: 310,
      width: 310
  },
});

const PlannerRead = ({ route }) => {
    const { pno } = route.params;
    const { userId } = route.params;
    const [plannerInfo, setPlannerInfo] = useState(null);
    const [plannerLocations, setPlannerLocations] = useState([]);


    useEffect(() => {
        const fetchPlannerInfo = async () => {
          try {
            const response1 = await axios.get(
              `${ip}/planner/read?pno=${pno}`
            );
            setPlannerInfo(response1.data);
          } catch (error) {
            console.error("플래너 정보를 가져오는 중 오류 발생:", error);
          }
        };

        const fetchPlannerLocations = async () => {
            try {
                const response2 = await axios.get(`${ip}/plannerloc/planner/${pno}`);
                setPlannerLocations(response2.data);
            } catch (error) {
                console.error("플래너 위치 정보를 가져오는 중 오류 발생:", error);
            }
        };

        fetchPlannerInfo();
        fetchPlannerLocations();
      }, [pno]);

    return(
        <ScrollView style={styles.main}>
            {plannerInfo && <Title ptitle={plannerInfo.ptitle} />}
            <ScrapButton pno={pno} plannerInfo={plannerInfo} plannerLocations={plannerLocations} userId={userId}/>
            {plannerInfo && <PlannerDay pstart={plannerInfo.pstart} pend={plannerInfo.pend}/>}
            <View style={styles.mapview}>
              {plannerLocations && <ReadMap paths={plannerLocations}/>}
            </View>
            {plannerLocations && <ReadLoc paths={plannerLocations}/>}
        </ScrollView>
    );
}

export default PlannerRead;