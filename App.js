/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {GenderSelection} from './components/GenderSelection';
import {Height} from './components/Height';
import {WeightAge} from './components/WeightAge';
import {ResultModal} from './components/ResultModal';

const App = () => {
  const [gender, setGender] = useState('male');

  const [height, setHeight] = useState(176);

  const [weight, setWeight] = useState(71);

  const [age, setAge] = useState(37);

  const [modalVisible, setModalVisible] = useState(false);

  function onCalculator() {
    setModalVisible(true);
    console.log(modalVisible);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ResultModal
          height={height}
          weight={weight}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        <View style={styles.header}>
          <Text style={styles.titleHeader}>BMI CALCULATOR</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.BMIView}>
          <View style={styles.genderSelecttionView}>
            <GenderSelection
              type="male"
              gender={gender}
              setGender={setGender}
            />
            <GenderSelection
              type="female"
              gender={gender}
              setGender={setGender}
            />
          </View>

          <View style={styles.heightView}>
            <Height height={height} setHeight={setHeight} />
          </View>

          <View style={styles.weightAgeView}>
            <WeightAge
              title="WEIGHT (kg)"
              value={weight}
              setValue={setWeight}
            />
            <WeightAge title="AGE" value={age} setValue={setAge} />
          </View>

          <TouchableOpacity
            style={styles.calculateButton}
            onPress={onCalculator}>
            <Text style={styles.calculateText}>CALCULATE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2635',
  },
  header: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'normal',
  },
  line: {
    height: 4,
    backgroundColor: '#13192C',
  },
  BMIView: {
    flex: 1,
  },

  genderSelecttionView: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  heightView: {
    flex: 1 / 3,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },

  weightAgeView: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  calculateButton: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1961',
  },

  calculateText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
