import React from 'react'
import { View, Image, Text, SafeAreaView, StatusBar, FlatList } from 'react-native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton, FocusStatusBar, DetailsDesc, DetailsBid } from '../components'
import { SubInfo } from '../components/SubInfo'
import { Video } from 'expo-av';


const DetailsHeader = ({data, navigation}) => (
  
  <View style={{ width: "100%", height: data.orientation === "portrait" ? 600 : 300, justifyContent: 'center', alignItems: 'center', ...SHADOWS.dark }}>
  {data.type == "image" ?
    <Image
      source={data.path}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
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
        height: "100%"
       
      }}
    />
  }
   {/* <CircleButton 
   imgUrl={assets.left}

     handlePress={() => navigation.goBack()}
     /> */}
   <CircleButton imgUrl={assets.heart} right={15} top={10} />
</View>
)


const Details = ({ route, navigation }) => {
  const { data } = route.params


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
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
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}


export default Details

