
import { StyleSheet as SS, Text as T, View as V } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'


export default function Header() {

        const mycolor = '#212121';

        return (

                <V
                
                        style={{
                                height: 40,
                                backgroundColor: 'white',
                                flexDirection: "row",
                                justifyContent: "space-between",
                                elevation: 0,
                        }}
                
                >

                        <V style={{flexDirection: "row", margin: 5}}>
                                <Entypo 
                                        style={{marginLeft: 20}}
                                        name="youtube" size={28} color="red" 
                                />
                                <T style={{fontSize: 22, marginLeft: 5, fontWeight: 'bold'}}>YouTube</T>
                        </V>

                        <V style={{flexDirection: "row", justifyContent: "space-around", width: 150, margin: 5}}>  
                                <Ionicons name="md-videocam" size={24} color={mycolor} />
                                <Ionicons name="md-search" size={24} color={mycolor} />
                                <MaterialIcons name="account-circle" size={24} color={mycolor} />
                        </V>

                </V>



        );
}

