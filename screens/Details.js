
import {View, SafeAreaView, FlatList } from 'react-native'

import { SIZES, SHADOWS } from '../constants'
import { RectButton, FocusStatusBar, DetailsBid } from '../components'
import { DetailsHeader } from '../components/DetailsHeader'

const Details = ({ route }) => {
  const { data } = route.params
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
          ListHeaderComponent={<DetailsHeader data={data}/>}
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

