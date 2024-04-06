import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { atom, Provider as JotaiProvider } from "jotai";

const bookAtom = atom("The Great Gatsby");

export default function App() {
  return (
    <JotaiProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </JotaiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
