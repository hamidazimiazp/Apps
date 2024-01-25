import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { theme } from "../../config/colors";

Ionicons.loadFont();

const ScannerPage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    setScanned(false);

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
    return (
      <View style={styles.container}>
        <Text style={styles.messageS}>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.messageF}>No access to camera</Text>
      </View>
    );
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
};

export default ScannerPage;

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
  messageS: {
    color: theme.success,
  },
  messageF: {
    color: theme.danger,
  },
});
