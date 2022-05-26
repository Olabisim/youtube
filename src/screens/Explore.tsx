
import { StyleSheet as SS, Text as T, View as V } from 'react-native';
import Constant from 'expo-constants'


const Explore = () => {
        return (
                <V
                        style={{
                                flex: 1,
                                marginTop: Constant.statusBarHeight
                        }}
                >
                        <T>Explore screen</T>
                </V>
        )
}

export default Explore