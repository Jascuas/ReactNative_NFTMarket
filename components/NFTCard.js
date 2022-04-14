import { View, Image, ActivityIndicator } from 'react-native'
import { useNavigation, } from '@react-navigation/native'
import  { useState } from 'react'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from '../components'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'
import { Video } from 'expo-av';

export const NFTCard = ({ data }) => {
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const onLoading = (value) => {
    setLoading(value)
  }
  const updatePlaybackCallback = (status) => {

    setLoading(!status.isPlaying );
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
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
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
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font
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
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font
            }}
            onPlaybackStatusUpdate={updatePlaybackCallback}
          />
          
        }
        <CircleButton imgUrl={assets.heart} right={10} top={10} />

      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>

        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>

    </View>
  )
}

