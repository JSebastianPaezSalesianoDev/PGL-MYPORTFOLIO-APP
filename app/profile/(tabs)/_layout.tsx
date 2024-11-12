import { Tabs } from "expo-router";
import { Text } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Header } from "react-native/Libraries/NewAppScreen";
import HeaderComponent from "../../../components/HeaderComponent";
import { info } from "../../../data/HeaderData";
export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerTitle: "Header",
      }}
    >
      <Tabs.Screen
        name="cards"
        options={{
          title: "cards",
          tabBarIcon: () => <Fontisto name="person" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="repository"
        options={{
          title: "repository",
          tabBarIcon: () => <Fontisto name="qrcode" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};
