import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text as T, View } from 'react-native';
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Roothome = () => {
        return (
                <Tab.Navigator>
                        <Tab.Screen name="Home" component={Home} />
                        <Tab.Screen name="Explore" component={Explore} />
                        <Tab.Screen name="Subscribe" component={Subscribe} />
                </Tab.Navigator>
        )
}


export default function App() {
        return (
                <NavigationContainer>
                        <Stack.Navigator>
                                <Stack.Screen name="rootHome" component={Roothome} />
                                <Stack.Screen name="search" component={Search} />
                                <Stack.Screen name="videoplayer" component={VideoPlayer} />
                        </Stack.Navigator>
                </NavigationContainer>
        );
}

