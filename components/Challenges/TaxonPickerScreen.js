import React from "react";

import {
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import styles from "../../styles/taxonPicker";

const TaxonPickerScreen = ( { navigation } ) => {
  const { setTaxonId } = navigation.state.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require( "../../assets/backgrounds/background.png" )}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Show me...</Text>
        </View>
        <View style={styles.gridContainer}>
          <ScrollView
            contentContainerStyle={styles.row}
            scrollEnabled={false}
          >
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "all" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-all.png" )}
              />
              <Text style={styles.text}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "plants" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-plants.png" )}
              />
              <Text style={styles.text}>Plants</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "amphibians" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-amphibians.png" )}
              />
              <Text style={styles.text}>Amphibians</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "fungi" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-fungi.png" )}
              />
              <Text style={styles.text}>Fungi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "fish" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-fish.png" )}
              />
              <Text style={styles.text}>Fish</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "reptiles" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-reptiles.png" )}
              />
              <Text style={styles.text}>Reptiles</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "arachnids" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-arachnids.png" )}
              />
              <Text style={styles.text}>Arachnids</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "birds" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-birds.png" )}
              />
              <Text style={styles.text}>Birds</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "insects" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-insects.png" )}
              />
              <Text style={styles.text}>Insects</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "mollusks" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-mollusks.png" )}
              />
              <Text style={styles.text}>Mollusks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.imageCell}
              underlayColor="transparent"
              onPress={() => {
                setTaxonId( "mammals" );
              }}
            >
              <Image
                style={styles.image}
                source={require( "../../assets/taxa/icn-iconic-taxa-mammals.png" )}
              />
              <Text style={styles.text}>Mammals</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.imageCell, { backgroundColor: "transparent" }]}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TaxonPickerScreen;
