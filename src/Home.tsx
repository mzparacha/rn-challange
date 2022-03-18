import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BranchesInput from './BranchesInput';
import Map from './Map';
import Spinner from './Spinner';
import BranchDetails from './BranchDetails';
import { useClosestBranch } from './hooks/useClosestBranch';

const Home = () => {
  const { state } = useClosestBranch();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Map />
      {state === 'ready' ? (
        <>
          <BranchesInput />
          <BranchDetails />
        </>
      ) : state === 'error' ? (
        <View style={styles.centred}>
          <Text style={styles.error}> An error has occurred </Text>
        </View>
      ) : (
        <View style={styles.centred}>
          <Spinner height={60} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  error: {
    fontFamily: 'textRegular',
    fontSize: 24,
    color: '#ED0000',
    padding: 10,
    backgroundColor: '#80808030',
  },
  centred: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
