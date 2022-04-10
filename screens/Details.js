
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from '../components'
import { SubInfo, EthPrice, NFTTitle } from '../components/SubInfo'


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
      <View style={{ width: "100%", height: 400 }}>
        

        <CircleButton imgUrl={assets.heart} right={10} top={10} />

      </View>

      <SubInfo />

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