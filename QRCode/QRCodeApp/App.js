import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <DrawerMenu />
    </NavigationContainer>
  );
}
