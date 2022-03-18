import { StyleSheet, View, Text } from 'react-native';
import { Branch } from './Branch';

export default function BranchDetails({
  branch: { ServiceAndFacility, Name, Accessibility },
}: {
  branch: Branch;
}) {
  const services =
    ServiceAndFacility && ServiceAndFacility.length > 1
      ? ServiceAndFacility?.slice(0, -1)?.join(', ') +
        ' and ' +
        ServiceAndFacility?.slice(-1)
      : ServiceAndFacility?.join(', ');

  const accessibilities =
    Accessibility && Accessibility.length > 1
      ? Accessibility?.slice(0, -1)?.join(', ') +
        ' and ' +
        Accessibility?.slice(-1)
      : Accessibility?.join(', ');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Branch name:</Text>
        <Text style={styles.textBold}>{Name}</Text>
      </View>
      {ServiceAndFacility && (
        <View style={styles.row}>
          <Text style={styles.text}>Services:</Text>
          <Text style={styles.textBold}>{services}</Text>
        </View>
      )}
      {Accessibility && (
        <View style={styles.row}>
          <Text style={styles.text}>Accessibility:</Text>
          <Text style={styles.textBold}>{accessibilities}</Text>
        </View>
      )}
    </View>
  );
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
