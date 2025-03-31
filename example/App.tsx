import { useEvent } from 'expo';
//import CustomExpoModule, { CustomExpoModuleView } from 'custom-expo-module';
import * as CustomExpoModule from 'custom-expo-module';

import { Button, SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

// Define theme colors
const themes = {
  light: {
    background: '#F5F5F5',
    card: '#FFFFFF',
    text: '#333333',
    header: '#222222',
    border: '#DDDDDD',
  },
  dark: {
    background: '#121212',
    card: '#1E1E1E',
    text: '#E1E1E1',
    header: '#FFFFFF',
    border: '#333333',
  }
};

export default function App() {
  const [theme, setTheme] = useState(CustomExpoModule.getTheme());
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const colors = theme === 'dark' ? themes.dark : themes.light;

  useEffect(() => {
    const subscription = CustomExpoModule.addThemeListener(
      ({ theme: newValue}) => {
        console.log('Theme changed:', newValue);
        setTheme(newValue);
      }
    );
    return () => {
      subscription.remove();
    };
  }, [setTheme]);

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      fontSize: 30,
      margin: 20,
      color: colors.header,
    },
    groupHeader: {
      fontSize: 20,
      marginBottom: 20,
      color: colors.header,
    },
    group: {
      margin: 20,
      backgroundColor: colors.card,
      borderRadius: 10,
      padding: 20,
      borderWidth: 1,
      borderColor: colors.border,
    },
    text: {
      color: colors.text,
      marginBottom: 10,
    }
  });

  return (
    <SafeAreaView style={dynamicStyles.container}>
      <ScrollView style={dynamicStyles.container}>
        <Text style={dynamicStyles.header}>Module API Example</Text>

        <Group name="Functions" styles={dynamicStyles}>
          <Text style={dynamicStyles.text}>Theme: {theme}</Text>
          <Button
            title="Toggle Theme"
            onPress={() => {
              CustomExpoModule.setTheme(nextTheme);
            }}
          />
        </Group>

      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode; styles: any }) {
  return (
    <View style={props.styles.group}>
      <Text style={props.styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

// const styles = {
//   header: {
//     fontSize: 30,
//     margin: 20,
//   },
//   groupHeader: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   group: {
//     margin: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#eee',
//   },
//   view: {
//     flex: 1,
//     height: 200,
//   },
// };
