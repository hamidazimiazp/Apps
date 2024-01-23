import { Text, View, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GeneratedCards from "../../components/GeneratedCards/GeneratedCards";
import { theme } from "../../config/colors";
import BottomSheetPanel from "../../components/BottomSheetPanel/BottomSheetPanel";
import QrcodeFullDetails from "../../components/QrcodeFullDetails/QrcodeFullDetails";
import { TouchableOpacity } from "@gorhom/bottom-sheet";

const HomePage = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
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
