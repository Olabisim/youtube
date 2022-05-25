
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet as SS, Text as T, View as V, ScrollView as SV, TextInput as TI, FlatList as FL, ActivityIndicator as AI } from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons'
import MiniCard from './MiniCard';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=react&type=video&key=AIzaSyBr7jKwY617rwJ7Dl1Fi4JAWAw_x5_ktbo

const Search = () => {

        const [value, setValue] = useState<String>('')
        const [miniCardData, setMiniCardData] = useState([])
        const [loading, setLoading] = useState<Boolean>(false)

        const fetchData = () => {
                setLoading(true)
                fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBr7jKwY617rwJ7Dl1Fi4JAWAw_x5_ktbo`)
                .then(res => res.json())
                .then(data => {
                        setLoading(false)
                        console.log(data)
                        setMiniCardData(data.items)
                })
        }

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
                                                backgroundColor: "#E6E6E6",
                                                paddingLeft: 10
                                        }}
                               
                               
                                        value={value}
                                        onChangeText={text => setValue(text)}
                                >

                                </TI>

                                <Ionicons  
                                        name="md-send"
                                        size={24}
                                        onPress={() => fetchData()}
                                />
                        </V>

                        {
                        loading 
                        && 
                        <AI style={{marginTop: 10, flex: 1, alignItems: "center", justifyContent: "center"}} 
                                size="large" 
                                color="red" 
                        />
                        }

                        <FL
                                data={miniCardData}
                                renderItem={({item}) => {
                                        return <MiniCard 
                                                videoId={item.id.videoId}
                                                title={item.snippet.title}
                                                channel={item.id.channelTitle}
                                        />
                                }}
                                keyExtractor={item => item.id.videoId}
                        />
                </V>
        )

}

export default Search;