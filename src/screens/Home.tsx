import { StatusBar } from 'expo-status-bar';
import { StyleSheet as SS, Text as T, View as V, ScrollView as SV } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'
import Constant from 'expo-constants'


export default function Home({navigation: {navigate}}) {
        return (

                <V style={styles.container}>

                        <Header />

                        <SV>

                                <Card />
                                <Card />
                                <Card />
                                <Card />

                        </SV>

                </V>
        );
}


const styles = SS.create({
        container: {
                flex: 1,
                backgroundColor: '#fff',
                marginTop: Constant.statusBarHeight
                // alignItems: 'center',
                // justifyContent: 'center',
        },
});
