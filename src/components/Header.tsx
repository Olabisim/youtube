
import { StyleSheet as SS, Text as T, View as V } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'


export default function Home() {

        const mycolor = '#212121';

        return (

                <V
                
                        style={{
                                height: 40,
                                backgroundColor: 'white',
                                marginTop: Constant.statusBarHeight,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                elevation: 4,
                        }}
                
                >
                        <V style={{flexDirection: "row", margin: 5}}>
                                <Entypo 
                                        style={{marginLeft: 20}}
                                        name="youtube" size={28} color="red" 
                                />
                                <T style={{fontSize: 22, marginLeft: 5, fontWeight: 'bold'}}>Youtube</T>
                        </V>

                        <V style={{flexDirection: "row", justifyContent: "space-around", width: 150, margin: 5}}>  
                                <Ionicons name="md-videocam" size={32} color={mycolor} />
                                <Ionicons name="md-search" size={32} color={mycolor} />
                                <MaterialIcons name="account-circle" size={32} color={mycolor} />
                        </V>

                </V>
        );
}

