import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome to my page</Text>
        <View style={styles.welcomeView}>
          <Link href="hola">Press me!!</Link>
        </View>
      </View>
      <Text>Open up App.tsx to start working on your ap!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeView: {
    flex: 2,
    backgroundColor: colors.greenCheck,
    padding: 10,
  },
});
