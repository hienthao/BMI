import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';

export function GenderSelection({type = '', gender = '', setGender}) {
  function onGenderSelected() {
    gender = type;
    setGender(type);
  }

  return (
    <>
      <View style={styles.genderView}>
        <TouchableOpacity
          style={[
            styles.genderTouch,
            {backgroundColor: gender === type ? '#1A2940' : '#333245'},
          ]}
          onPress={onGenderSelected}>
          <Foundation
            name={type === 'male' ? 'male-symbol' : 'female-symbol'}
            size={100}
            color={type === 'male' ? '#02d1db' : 'red'}
          />
          <Text style={styles.commonText}>
            {type === 'male' ? 'MALE' : 'FEMALE'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  genderView: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  genderTouch: {
    height: '90%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
