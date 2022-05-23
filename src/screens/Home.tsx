import { StatusBar } from 'expo-status-bar';
import { StyleSheet as SS, Text as T, View as V, ScrollView as SV } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'


export default function Home() {
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
                // alignItems: 'center',
                // justifyContent: 'center',
        },
});
