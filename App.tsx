import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text as T, View } from 'react-native';
import Home from './src/screens/Home'


export default function App() {
        return (
                <View style={{flex: 1}}>
                        <Home />
                </View>
        );
}

