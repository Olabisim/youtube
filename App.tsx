import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text as T, View } from 'react-native';
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Constant from 'expo-constants'


export default function App() {
        return (
                <View style={{flex: 1, marginTop: Constant.statusBarHeight,}}>
                        {/* <Home />  */}
                        <Search /> 
                </View>
        );
}

