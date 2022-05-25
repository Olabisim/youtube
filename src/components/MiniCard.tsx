
import { StyleSheet as SS, Text as T, View as V, Image as I, Dimensions as D } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';


const MiniCard = (props: any) => {
        return (
                <V style={{flexDirection: "row", margin: 18, marginBottom: 0}}>

                       
                        <I 
                                source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} 
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
                                        {props.title}
                                </T>
                                <T style={{fontSize: 12}}>{props.channel}</T>
                        </V>

                </V>
        )
}


export default MiniCard