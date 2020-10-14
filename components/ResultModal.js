import React from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function ResultModal({height, weight, modalVisible, setModalVisible}) {
  const bmi = (weight / (((height / 100) * height) / 100)).toFixed(2);

  function closeModal() {
    setModalVisible(!modalVisible);
  }

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>YOUR RESULT</Text>
        </View>
        <View style={styles.resultView}>
          <Text
            style={[
              styles.conclusionText,
              {
                color: bmi < 18.5 ? 'yellow' : bmi >= 25 ? 'red' : 'green',
              }
            ]}>
            {bmi < 18.5 ? 'UNDERWEIGHT' : bmi >= 25 ? 'OVERWEIGHT' : 'NORMAL'}
          </Text>

          <Text style={styles.BMIText}>{bmi}</Text>

          <Text style={styles.commentText}>
            {bmi < 18.5
              ? 'That you are too thin.'
              : bmi >= 25
              ? 'That you have overweight.'
              : 'That you are healthy.'}
          </Text>
        </View>

        <TouchableOpacity style={styles.recalculateTouch} onPress={closeModal}>
          <Text style={styles.recalculateText}>RE-CALCULTE</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212639',
    opacity: 1,
  },
  headerView: {
    width: '100%',
    height: 50,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  resultView: {
    flex: 1,
    backgroundColor: '#323244',
    borderRadius: 8,
    marginTop: 60,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  conclusionText: {
    color: '#FDA565',
    fontSize: 25,
    fontWeight: 'bold',
  },
  BMIText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  commentText: {
    marginTop: 3,
    marginStart: 20,
    marginEnd: 20,
    color: '#EDEBED',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recalculateTouch: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1961',
  },
  recalculateText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
