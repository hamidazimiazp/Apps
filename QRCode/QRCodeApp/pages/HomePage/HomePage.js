import { View, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GeneratedCards from "../../components/GeneratedCards/GeneratedCards";
import { theme } from "../../config/colors";
import BottomSheetPanel from "../../components/BottomSheetPanel/BottomSheetPanel";
import QrcodeFullDetails from "../../components/QrcodeFullDetails/QrcodeFullDetails";

const HomePage = () => {
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
      <ScrollView>
        <GeneratedCards
          setBottomPanelData={setBottomPanel}
          openModal={toggleBottomPanelHandler}
        />
      </ScrollView>
      <BottomSheetPanel
        toggle={toggleBottomPanel}
        openModal={toggleBottomPanelHandler}
      >
        <ScrollView>
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
});
