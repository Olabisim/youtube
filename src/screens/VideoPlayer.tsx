
import { StyleSheet as SS, Text as T, View as V } from 'react-native';
import Constant from 'expo-constants'


const VideoPlayer = () => {
        return (
                <V
                        style={{flex: 1,marginTop: Constant.statusBarHeight}}
                >
                        <T>video player screen</T>
                </V>
        )
}

export default VideoPlayer