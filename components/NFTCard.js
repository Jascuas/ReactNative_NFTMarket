import { View, Image, WebView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from '../components'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'
import { Video } from 'expo-av';

export const NFTCard = ({ data }) => {
  const navigation = useNavigation()


  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>

      <View style={{ width: "100%", height: data.orientation === "portrait" ? 600 : 300 }}>
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

