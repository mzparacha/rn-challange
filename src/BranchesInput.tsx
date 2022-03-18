import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import InputResults from './InputResults';
import { useClosestBranch } from './hooks/useClosestBranch';

export default function BranchesInput() {
  const { search, setSearch } = useClosestBranch();

  const [input, setInput] = useState('');

  useEffect(() => {
    if (input.trim().length > 2 && setSearch) {
      setSearch('fetching');
      Location.geocodeAsync(input.trim())
        .then((result) => {
          setSearch(result[0] || 'no-result');
        })
        .catch(() => {
          setSearch('error');
        });
    } else {
      setSearch && setSearch(undefined);
    }
  }, [input]);
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.input}
        placeholder="Search for a branch"
        autoFocus
      />
      <View style={styles.result}>
        <InputResults search={search} input={input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
  },
  result: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    fontFamily: 'textRegular',
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 8,
    color: 'black',
    marginBottom: 10,
  },
});
