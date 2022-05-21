
import { StyleSheet as SS, Text as T, View as V } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import Constant from 'expo-constants'


export default function Home() {
        return (

                <V
                
                        style={{
                                height: 40,
                                backgroundColor: 'white',
                                marginTop: Constant.statusBarHeight
                        }}
                
                >
                        <V style={{flexDirection: "row", margin: 5}}>
                                <Entypo 
                                        style={{marginLeft: 20}}
                                        name="youtube" size={28} color="red" 
                                />
                                <T style={{fontSize: 22, marginLeft: 5}}>Youtube</T>
                        </V>

                        <V> 

                        </V>

                </V>
        );
}

