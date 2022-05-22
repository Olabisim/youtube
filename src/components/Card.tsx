
import { StyleSheet as SS, Text as T, View as V, Image as I, Dimensions as D } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';


const Card = () => {
        return (
                <V style={{marginBottom: 10}}>

                        <I 
                        
                                source={{uri: "https://media.istockphoto.com/photos/teenage-girl-walking-on-sea-pier-picture-id683607708?b=1&k=20&m=683607708&s=170667a&w=0&h=ADhvhBmJqCAIyY5Q6Id4Lmx_XzsAXDxsvIhmlS4AtcY="}} 
                                style={{
                                        width: '100%',
                                        height: 200
                                }}
                        
                        />
                
                        <V
                                style={{
                                        flexDirection: "row",
                                        margin: 5
                                }}
                        >
                                <MaterialIcons name="account-circle" size={40} color="#212121" style={{margin: 10}} />
                                <V>
                                        <T
                                                style={{width: D.get("screen").width - 150, marginTop: 10}}
                                                ellipsizeMode='tail'
                                                numberOfLines={2}
                                        >this is an amazing quotethis is an amazing quote this is an amazing quotethis is an amazing quote this is an amazing quote this is an amazing quote</T>
                                        <T style={{color: "#ccc"}}>this is an amazing quote</T>
                                </V>

                        </V>

                </V>
        )
}


export default Card;