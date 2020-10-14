import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

export function Height({height = 176, setHeight}) {
  function changeValue(val) {
    height = val;
    setHeight(parseInt(val));
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heightText}>HEIGHT</Text>

        <View style={styles.heightTextView}>
          <Text style={styles.heightNumberText}>{height}</Text>
          <Text style={styles.cmText}> cm</Text>
        </View>

        <Slider
          style={styles.slider}
          value={height}
          minimumValue={20}
          maximumValue={200}
          minimumTrackTintColor="#844b69"
          maximumTrackTintColor="#ffffff"        
          onSlidingComplete = {(val) => changeValue(val)}
          onValueChange={(val) => changeValue(val)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#333244',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heightText: {
    color: 'grey',
  },
  heightTextView: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },

  heightNumberText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cmText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  slider: {
    width: '90%',
    height: 30,
    marginTop: 15,
  },
});
