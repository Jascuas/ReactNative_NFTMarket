import { useState } from 'react'
import { View, Text } from 'react-native'

import { EthPrice, NFTTitle } from '../components/SubInfo'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants'


const DetailsDesc = ({ data }) => {
  const [readMore, setReadMore] = useState(false)
  const ReadMore = () => (
    <Text 
    onPress={() => {setReadMore(!readMore)}}
    style={{
      fontSize: SIZES.small,
      fontFamily: FONTS.semiBold,
      color: COLORS.primary
    }}>
      {readMore ?
        
        " Show Less" :
        " Read more"
      }

    </Text>
  )


  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.base
      }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>

        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>Description: </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {readMore ?
              data.description 
              :
              data.description.slice(0, 100) + "..."
            }
            <ReadMore />
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc