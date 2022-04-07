
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from '../components'
import { SubInfo, EthPrice, NFTTitle } from '../components/SubInfo'

import { Video } from 'expo-av';
import video from '../assets/images/Donut-Eater-1.mp4';

const Details = ({data}) => {
  const navigation = useNavigation()

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 300 }}>
        <Video
          source={video}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%",
          height: "100%",
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />

      </View>

      <SubInfo />

      {/* <View style={{ width: "100%", padding: SIZES.font }}>

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
      </View> */}

    </View>
  )
}


export default Details

// resizeMode="cover"
//           style={{
//             width: "100%",
//             height: "100%",
//             borderTopLeftRadius: SIZES.font,
//             borderTopRightRadius: SIZES.font }}