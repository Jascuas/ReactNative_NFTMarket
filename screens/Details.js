import React, { useState } from 'react'
import {
  View, Image, Text, SafeAreaView,
  FlatList
} from 'react-native'

import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton, FocusStatusBar, DetailsDesc, DetailsBid } from '../components'

import { NFTCard } from '../components/NFTCard'

const Details = ({ route }) => {
  console.log(route.params)
  const [loading, setLoading] = useState(true)
  const { data } = route.params

  const onLoading = (value) => {
    setLoading(value)

  }
  const updatePlaybackCallback = (status) => {

  }

  const Loader = () => (
    <View style={{
      width: '100%',
      position: 'absolute',
      paddingVertical: SIZES.font,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
    }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )

  const DetailsHeader = () => (
    <View>
      <NFTCard data={data} />
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
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar barStyle="dark-content"
        backgroundColor="transparent" transLucent={true} />

      <View style={{ flex: 1 }}>
      
        <FlatList
          data={data.bids}
          renderItem={({ item }) => <DetailsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={<DetailsHeader/>}
        />

        <View style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
        }}>
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>
        
      </View>
    </SafeAreaView>
  )
}


export default Details

