import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [regmes, setRegmes] = useState("");

  const handlePress = () => {
    setRegmes(`Hello, ${first} ${last}! Thank you for registering!`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Create an account</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setFirst(text)}
        value={first}
        autoCapitalize={"words"}
        placeholder="Enter your first name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLast(text)}
        value={last}
        autoCapitalize={"words"}
        placeholder="Enter your last name"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize={"words"}
        placeholder="Enter your email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPass(text)}
        value={pass}
        autoCapitalize={"words"}
        placeholder="Choose a password"
      />
      <View style={styles.button}>
        <Button title="Confirm" onPress={handlePress} />
      </View>
      <View style={styles.button}>
        <Button title="Switch to Login" onPress={handlePress} />
      </View>
      {regmes && <Text style={styles.paragraph}>{regmes}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    height: 40,
    color: "gray",
    borderColor: "gray",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: "50%",
    alignSelf: "center",
    padding: 5,
  },
});
