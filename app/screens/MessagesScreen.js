import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ListItem from "../components/list-item";
import Screen from "../components/screen";
import ListItemSeparator from "../components/list-item-separator";
import ListItemDeleteAction from "../components/list-item-delete-action";

const initialMessages = [
  {
    id: 1,
    name: "John Doe",
    message: "Hello, how are you?",
    image: require("../assets/face.jpeg"),
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "I am doing well, thank you.",
    image: require("../assets/face.jpeg"),
  },
  {
    id: 3,
    name: "Bob Johnson",
    message: "Good morning!",
    image: require("../assets/face.jpeg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => {
          return message.id.toString();
        }}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={item.message}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              name: "Jane Smith",
              message: "I am doing well, thank you.",
              image: require("../assets/face.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
