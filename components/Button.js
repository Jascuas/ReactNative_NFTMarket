import { TouchableOpacity, View, Text, Image } from 'react-native'

import { COLORS, SIZES, SHADOWS } from '../constants'

export const CircleButton = ({ imgUrl, handPress, ...props }) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }}
            onPress={handPress}
        >
            <Image 
                source={imgUrl}
                resizeMode="contain"
                style={{width: 24, height: 24}}
            />
        </TouchableOpacity>
    )
}

export const RectButton = () => {
    return (
        <TouchableOpacity>
            <Text>Button</Text>
        </TouchableOpacity>
    )
}