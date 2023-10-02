import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1.5,
    backgroundColor: 'snow',
    
  },
  modalView:{
    padding: 10,
    width: 300, // 모달의 너비 조정
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // 가로 방향으로 배치
    flexWrap: 'wrap', // 넘치면 다음 줄로 이동
  },
  textItem: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15
  },
  buttonlView: {
    margin: 10,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 20,
    height: 30,
    width: 70,
    backgroundColor: 'skyblue'
  },
  closeText: {
    color: 'white',
    fontSize: 20
  },
  closeView: {
    borderBottomLeftRadius: 18, 
    borderBottomRightRadius: 18, 
    alignItems: 'center', 
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'gray',
    alignItems: 'center', 
  }
});

const ModalComponent = ({ isVisible, toggleModal, selectedData, toggleData }) => {
    
    const data = [
        '서울', '경기도', '인천', '강원도',
        '충청북도', '충청남도', '대전', '세종',
        '전라북도', '전라남도', '광주', '경상북도',
        '대구', '경상남도', '울산', '부산', '제주도',
    ];

    const isDataSelected = (item) => selectedData.includes(item);

    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={toggleModal}
        >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={styles.modalView}>
                    {data.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleData(item)}>
                    <View style={[styles.buttonlView, { backgroundColor: isDataSelected(item) ? 'lightgreen' : 'skyblue' },]}>
                        <Text style={styles.textItem} key={index}>
                            {item}
                        </Text>
                    </View>  
                    </TouchableOpacity>  
                    ))}
                </View>
                    <TouchableOpacity onPress={toggleModal}>
                        <View style={styles.closeView}>
                            <Text style={styles.closeText}>창 닫기</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
    </Modal>
  );
};

export default ModalComponent;
