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
  const [login, setLogin] = useState(false);

  const handlePress = () => {
    if (login) {
      setRegmes(`Welcome back!`);
    }
    if (!login) {
      setRegmes(`Hello, ${first} ${last}! Thank you for registering!`);
    }
  };
  const handleSwitch = () => {
    if (login) {
      setLogin(false);
    }
    if (!login) {
      setLogin(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {!login && <Text style={styles.paragraph}>Create an account</Text>}
      {login && <Text style={styles.paragraph}>Log In</Text>}
      {!login && (
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirst(text)}
          value={first}
          autoCapitalize={"words"}
          placeholder="Enter your first name"
        />
      )}
      {!login && (
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLast(text)}
          value={last}
          autoCapitalize={"words"}
          placeholder="Enter your last name"
        />
      )}

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
        placeholder={login ? "Enter your password" : "Choose a password"}
      />
      <View style={styles.button}>
        <Button title="Confirm" onPress={handlePress} />
      </View>
      <View style={styles.button}>
        <Button
          title={login ? "Create an account" : "Switch to Login"}
          onPress={handleSwitch}
        />
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
