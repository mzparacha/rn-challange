import { ReactElement } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Branch } from './Branch';

export default function BranchDetails({ branches }: { branches: Branch[] }) {
  const nearBranches = branches.map((branch) => (
    <View key={branch.Identification} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Branch name:</Text>
        <Text style={styles.textBold}>{branch.Name}</Text>
      </View>
      {branch.ServiceAndFacility && (
        <View style={styles.row}>
          <Text style={styles.text}>Services:</Text>
          <Text style={styles.textBold}>
            {branch.ServiceAndFacility.join(', ')}
          </Text>
        </View>
      )}
      {branch.Accessibility && (
        <View style={styles.row}>
          <Text style={styles.text}>Accessibility:</Text>
          <Text style={styles.textBold}>{branch.Accessibility.join(', ')}</Text>
        </View>
      )}
    </View>
  ));

  return <>{nearBranches}</>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80808030',
    padding: 10,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'textRegular',
    color: 'black',
    fontSize: 14,
    flex: 1,
  },
  textBold: {
    fontFamily: 'textBold',
    color: 'black',
    fontSize: 14,
    flex: 1,
  },
});
