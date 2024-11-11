import { Tabs } from "expo-router";
import { Text } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        header: () => <Text>My custom Header</Text>,
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
