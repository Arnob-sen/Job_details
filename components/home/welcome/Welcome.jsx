import React, { useState } from 'react'
import { View, Text,TextInput,TouchableOpacity,Image,FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { icons,SIZES } from '../../../constants'

import styles from './welcome.style'
const jobtypes=['Full Time','Part Time','Contractor'];
const Welcome = () => {
  const router=useRouter();
  [activeJobtype,setActiveJobtype]=useState('Full Time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Arnob</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>

      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.searchInput}
          value=''
          placeholder="What are you looking for?" 
          />

        </View>
        <TouchableOpacity style={styles.searchBtn} >
          <Image source={icons.search} 
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>

      </View>
      <View>
        <FlatList
        data={jobtypes}
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobtype,item)} onPress={()=>{
            setActiveJobtype(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobtype,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        
        
        />
      </View>
    </View>
  )
}

export default Welcome