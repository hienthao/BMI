import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export function WeightAge({title = '', value = 150, setValue}) {
  function minusChangeValue() {
    value = --value;
    setValue(value);
  }

  function plusChangeValue() {
    value = ++value;
    setValue(value);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>

        <Text style={styles.valueText}>{value}</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.touchable}
            activeOpacity={0.6}
            onPress={minusChangeValue}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchable}
            activeOpacity={0.6}
            onPress={plusChangeValue}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '45%',
    margin: 10,
    backgroundColor: '#333244',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'grey',
    marginVertical: 20,
  },
  valueText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchable: {
    marginVertical: 30,
    marginHorizontal: 10,
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: '#5F636E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
