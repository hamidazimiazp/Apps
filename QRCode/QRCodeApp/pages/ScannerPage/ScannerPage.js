import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { theme } from "../../config/colors";

Ionicons.loadFont();

export default function ScannerPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("Result", { type, data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          justifyContent: "center",
        }}
      >
        <Ionicons name="qr-code" color={theme.white} size={24} />
        <Text style={styles.title}>Scanner</Text>
      </View>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: "100%", height: "80%", borderRadius: 5 }}
        />
      )}
      {scanned && (
        <View style={styles.barcodeRefresh}>
          <TouchableOpacity onPress={() => setScanned(false)}>
            <Ionicons name="refresh" size={25} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.Quaternary,
  },
  title: {
    color: theme.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  barcodeRefresh: {
    width: 50,
    height: 50,
    backgroundColor: theme.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
