// @flow

import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

import styles from "../../styles/home/locationPicker";
import icons from "../../assets/icons";
import postingIcons from "../../assets/posting";

type Props = {
  region: Object,
  onRegionChange: Function,
  returnToUserLocation: Function,
  posting: ?boolean
}

const LocationMap = ( {
  region,
  onRegionChange,
  returnToUserLocation,
  posting
}: Props ) => (
  <View style={{ flex: 1 }}>
    {region.latitude ? (
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        region={region}
        onRegionChangeComplete={region => onRegionChange( region )}
      />
    ) : null}
    <View pointerEvents="none" style={styles.markerFixed}>
      {posting
        ? <Image source={postingIcons.crosshair} />
        : <Image style={styles.markerPin} source={icons.locationPin} />
      }
    </View>
    <View style={styles.userLocation}>
      <TouchableHighlight
        onPress={() => returnToUserLocation()}
        style={styles.locationIcon}
      >
        <Image source={icons.indicator} />
      </TouchableHighlight>
    </View>
  </View>
);

export default LocationMap;
