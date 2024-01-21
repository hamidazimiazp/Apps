import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const bottomSheetModalPanel = ({ children, toggle, openModal }) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    // console.log("handleSheetChanges", index);
    openModal(false);
  }, []);

  useEffect(() => {
    toggle && handlePresentModalPress();
  }, [toggle]);

  // renders
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <BottomSheetScrollView showsVerticalScrollIndicator={false}>
            {children}
          </BottomSheetScrollView>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "black",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default bottomSheetModalPanel;
