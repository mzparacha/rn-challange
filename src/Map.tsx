import { LegacyRef, useRef, useEffect } from 'react';
import MapView, { Marker, Callout, Camera } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { Branch, branchAddress } from './Branch';

export default function Map({ closest }: { closest: Branch[] | undefined }) {
  const map: LegacyRef<MapView> = useRef(null);

  const zoomInMap = () => {
    map?.current?.getCamera().then((cam: Camera) => {
      cam.zoom += 1;
      map?.current?.animateCamera(cam);
    });
  };

  useEffect(() => {
    zoomInMap();
  }, []);

  const mapMarkers =
    closest &&
    closest.map((close) => {
      return (
        close.PostalAddress.GeoLocation && (
          <Marker
            ref={map}
            key={close.Identification}
            title={close.Name}
            description={branchAddress(close)}
            coordinate={{
              latitude: parseFloat(
                close.PostalAddress.GeoLocation.GeographicCoordinates.Latitude,
              ),
              longitude: parseFloat(
                close.PostalAddress.GeoLocation.GeographicCoordinates.Longitude,
              ),
            }}>
            <Callout tooltip>
              <View style={styles.callout}>
                <Text style={styles.calloutHeader}>
                  {close.Name || close.Identification}
                </Text>
                <Text style={styles.calloutText}>{branchAddress(close)}</Text>
              </View>
            </Callout>
          </Marker>
        )
      );
    });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 55.77,
          latitudeDelta: 11.03,
          longitude: -2.82,
          longitudeDelta: 11.35,
        }}>
        {mapMarkers}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: StyleSheet.absoluteFillObject,
  callout: {
    padding: 5,
    backgroundColor: '#ffffffa0',
    borderRadius: 4,
  },
  calloutHeader: {
    fontFamily: 'textBold',
    color: 'black',
    fontSize: 14,
  },
  calloutText: {
    fontFamily: 'textRegular',
    color: 'black',
    fontSize: 10,
  },
});
