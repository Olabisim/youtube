import { StatusBar } from 'expo-status-bar';
import { StyleSheet as SS, Text as T, View as V } from 'react-native';
import Header from '../components/Header'


export default function Home() {
        return (

                <V style={styles.container}>

                        <Header />
                        {/* <T>Header</T> */}

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
