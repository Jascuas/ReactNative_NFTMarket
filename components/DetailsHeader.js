import { View, Image, ActivityIndicator, Text } from 'react-native'
import { useState } from 'react'

import { COLORS, SIZES, FONTS, assets } from '../constants'
import { CircleButton, DetailsDesc } from '../components'
import { SubInfo } from './SubInfo'
import { Video } from 'expo-av';

export const DetailsHeader = ({ data }) => {

    const [loading, setLoading] = useState(true)

    const onLoading = (value) => {
        setLoading(value)
    }
    const updatePlaybackCallback = (status) => {
        setLoading(!status.isPlaying);
    }

    const orientation = data.orientation === "portrait" ? 600 : data.orientation === "square" ?
    450 : 300

    const Loader = () => (
        <View style={{
            width: '100%',
            position: 'absolute',
            paddingVertical: SIZES.font,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            height: orientation
        }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
    return (
        <View style={{
            marginBottom: SIZES.extraLarge
        }}>
            <View style={{ width: "100%", height: orientation }}>
                {loading &&
                    <Loader />
                }
                {data.type == "image" ?
                    <Image
                        source={data.path}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                        onLoadEnd={() => onLoading(false, "end")}
                    />
                    :
                    <Video
                        isLooping
                        shouldPlay
                        source={{
                            uri: data.path
                        }}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                        onPlaybackStatusUpdate={updatePlaybackCallback}
                    />

                }
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>

            <SubInfo />

            <View style={{ width: "100%", padding: SIZES.font }}>
                <View style={{ padding: SIZES.font }}>
                    <DetailsDesc data={data} />
                    {data.bids.length > 0 && (
                        <Text
                            style={{
                                fontSize: SIZES.font,
                                fontFamily: FONTS.semiBold,
                                color: COLORS.primary,
                            }}
                        >
                            Current Bids
                        </Text>
                    )}
                </View>
            </View>
        </View>
        
    )
}
