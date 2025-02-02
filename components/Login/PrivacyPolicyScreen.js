// @flow

import React from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView
} from "react-native";

import styles from "../../styles/login/privacy";
import i18n from "../../i18n";
import GreenHeader from "../GreenHeader";

type Props = {
  navigation: any
}

const PrivacyPolicyScreen = ( { navigation }: Props ) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safeViewTop} />
    <SafeAreaView style={styles.safeView}>
      <GreenHeader navigation={navigation} header={i18n.t( "inat_signup.privacy" )} />
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.text}>
          {"Last Modified on September 7, 2018\r\n\r\nThis is the privacy policy (\"Privacy Policy\") of the California Academy of Sciences' and National Geographic Society's iNaturalist.org website located at www.inaturalist.org (the \"Website\") and the iNaturalist.org iOS App, and Android App, and Our Seek by iNaturalist App (collectively, the \"App\"). This Privacy Policy describes how iNaturalist.org (\"iNaturalist,\" \"We,\" \"Us\" or \"Our\") handles Personal Information (as defined below) that users (\"You,\" \"Your\u201D or \"User\") provide to Us, or that We collect from You through the use of Our Website or Apps.\r\n\r\nWebsite and App Visitors\r\niNaturalist.org collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. iNaturalist.org's purpose in collecting non-personally identifying information is to better understand how iNaturalist.org's visitors use its Website and Apps. From time to time, iNaturalist.org may release non-personally-identifying information in the aggregate, e.g. by publishing a report on trends in the usage of its Website and Apps.\r\n\r\nPersonal Information\r\n\"Personal Information\" means information such as Your first\/middle initial or name, last name, e-mail address, street address, mailing address if different, town or city, state, postal code, telephone number, date of birth, location data, Internet Protocol (IP) addresses, personal photo, and any other information that would allow someone to identify You or contact You.\r\n\r\niNaturalist.org does not disclose such information other than as specified below.\r\n\r\nThe Personal Information We Collect\r\niNaturalist.org may collect Personal Information when You choose to interact with iNaturalist.org in ways that require iNaturalist.org to gather such information, such as if You browse on iNaturalist, register as an iNaturalist User, update or add information to Your iNaturalist page, provide content to iNaturalist through Your computer or phone, or otherwise communicate with Us about the iNaturalist service. When You post an Observation on iNaturalist, We may collect Your User ID, latitude and longitude of the site of the Observation, the place name of the site of the Observation, the date and time of the Observation, the app You used to contribute data, and the time zone of the site of the Observation. The amount and type of information that iNaturalist.org gathers depends on the nature of the interaction. In each case, iNaturalist.org collects such information only insofar as is necessary or appropriate to fulfill the purpose of Your interaction with iNaturalist.org. iNaturalist.org does not disclose personally-identifying information other than as described below, and You can always refuse to supply personally-identifying information, with the caveat that doing so may prevent You from engaging in certain Website and App-related activities.\r\n\r\nHow We Use Personal Information\r\nWe may use the Personal Information that You provide in order to provide the iNaturalist services and to administer and maintain the iNaturalist website. If You register as an iNaturalist User, You must give Us current, complete, and accurate information and keep the information You provide to Us up to date. We cannot and shall not be responsible for any problems or liability that may arise if You do not give Us current, accurate, truthful or complete information or You fail to update the information You give Us.\r\n\r\nHow We Disclose and Share Personal Information\r\nPersonal Information related to the Observations You post (date, time, location) is published on iNaturalist as matter of normal usage and therefore is shared with other iNaturalist Users. We explicitly share this public information in a machine-readable format for certain Observations with a handful of partners, including the Global Biodiversity Information Facility (\u201CGBIF\u201D).\r\n\r\nPersonal Information associated with Users\u2019 registration and account (name, email address, etc.) is shared with iNaturalist staff and representatives from iNaturalist Network partners (see https:\/\/www.inaturalist.org\/pages\/network for information about the iNaturalist Network). iNaturalist Network partners can request and receive Personal Information from Users who affiliate with their particular partner site as their primary site, including requesting and receiving Personal Data related to Observations made by such Users.\r\n\r\niNaturalist.org discloses potentially personally-identifying and personally-identifying information only to those of its programmers, contractors, and affiliated organizations that (i) need to know that information in order to process it on iNaturalist.org's behalf or to provide services available at iNaturalist.org's Website and Apps, and (ii) that have agreed not to disclose it to others.\r\n\r\n"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  </View>
);

export default PrivacyPolicyScreen;
