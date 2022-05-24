
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet as SS, Text as T, View as V, ScrollView as SV, TextInput as TI } from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons'
import MiniCard from './MiniCard';

const Search = () => {
        const [value, setValue] = useState('')

        return (
                <V
                        style={{flex: 1}}
                >
                        <V style={{
                                padding: 5,
                                flexDirection: "row",
                                justifyContent: "space-around",
                        }}>

                                <AntDesign name="back" size={24} color="black" />

                                <TI
                                        style={{
                                                width: "70%",
                                                backgroundColor: "#E6E6E6"
                                        }}
                                        value={value}
                                >

                                </TI>

                                <Ionicons  
                                        name="md-send"
                                        size={24}
                                />
                        </V>
                        <SV>
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                                <MiniCard />
                        </SV>
                </V>
        )

}

export default Search;