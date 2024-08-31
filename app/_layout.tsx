import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {
  KeyboardAwareScrollView,
  KeyboardProvider,
  KeyboardToolbar,
} from "react-native-keyboard-controller";
import { StyleSheet, TextInput, View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <KeyboardProvider>
        <KeyboardAwareScrollView bottomOffset={62}>
          <View>
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
          </View>
          <TextInput placeholder="Type a message..." style={styles.textInput} />
          <View>
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
          </View>
          <TextInput placeholder="Type a message..." style={styles.textInput} />
          <View>
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
          </View>
          <View>
            <TextInput
              placeholder="Type a message..."
              style={styles.textInput}
            />
            <TextInput
              placeholder="Type a message..."
              style={{ ...styles.textInput, backgroundColor: "green" }}
            />
            <TextInput
              placeholder="Type a message..."
              style={{ ...styles.textInput, backgroundColor: "red" }}
            />
          </View>
        </KeyboardAwareScrollView>
        <KeyboardToolbar />
      </KeyboardProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  listStyle: {
    padding: 16,
    gap: 16,
  },
  textInput: {
    width: "auto",
    flexGrow: 1,
    flexShrink: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d8d8d8",
    backgroundColor: "#fff",
    padding: 8,
    marginBottom: 8,
  },
});