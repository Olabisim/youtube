
import { StyleSheet as SS, Text as T, View as V, Image as I, Dimensions as D } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';


const MiniCard = () => {
        return (
                <V style={{flexDirection: "row", margin: 18, marginBottom: 0}}>

                       
                        <I 
                                source={{uri: "https://media.istockphoto.com/photos/teenage-girl-walking-on-sea-pier-picture-id683607708?b=1&k=20&m=683607708&s=170667a&w=0&h=ADhvhBmJqCAIyY5Q6Id4Lmx_XzsAXDxsvIhmlS4AtcY="}} 
                                style={{
                                        width: '45%',
                                        height: 100
                                }}
                        />

                        <V style={{paddingLeft:7}}>
                                <T 
                                        style={{ fontSize:17, width: D.get("screen").width/2}}
                                        ellipsizeMode="tail"
                                        numberOfLines={3}
                                >
                                        This is an amazing course this is an amazing course this is an amazing course this is an amazing course this is an amazing course
                                </T>
                                <T style={{fontSize: 12}}>coders never quit</T>
                        </V>

                </V>
        )
}


export default MiniCard