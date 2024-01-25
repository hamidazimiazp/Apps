import { Text, View, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GeneratedCards from "../../components/GeneratedCards/GeneratedCards";
import { theme } from "../../config/colors";
import BottomSheetPanel from "../../components/BottomSheetPanel/BottomSheetPanel";
import QrcodeFullDetails from "../../components/QrcodeFullDetails/QrcodeFullDetails";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Header from "../../components/Header/Header";

const HomePage = ({ navigation, route }) => {
  const [toggleBottomPanel, setToggleBottomPanel] = useState(false);
  const [BottomPanelData, setBottomPanel] = useState({
    id: 0,
    image: "",
    title: "",
    description: "",
  });

  const toggleBottomPanelHandler = () => {
    setToggleBottomPanel(!toggleBottomPanel);
  };

  const drawerHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Header drawerHandler={drawerHandler} />
      <View style={styles.craeteButtonWrapper}>
        <TouchableOpacity
          style={styles.craeteButton}
          onPress={() => {
            navigation.navigate("Create");
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.craeteButtonText}>Create QRcode</Text>
        </TouchableOpacity>
      </View>
      <GeneratedCards
        setBottomPanelData={setBottomPanel}
        openModal={toggleBottomPanelHandler}
        refreshAgain={route?.params?.refreshAgain ?? false}
      />

      <BottomSheetPanel
        toggle={toggleBottomPanel}
        openModal={toggleBottomPanelHandler}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <QrcodeFullDetails data={BottomPanelData} />
        </ScrollView>
      </BottomSheetPanel>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Quaternary,
    paddingHorizontal: 20,
  },
  craeteButtonWrapper: {
    marginTop: 10,
  },
  craeteButton: {
    paddingVertical: 10,
    width: "95%",
    borderWidth: 1,
    borderColor: theme.white,
    borderRadius: 5,
    marginLeft: 10,
  },
  craeteButtonText: {
    color: theme.white,
    textAlign: "center",
  },
});
