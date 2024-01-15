import React from 'react'
import { TouchableOpacity,Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimemsion,handlepress}) => {
  return (
  <TouchableOpacity style={styles.btnContainer} onPress={handlepress}>
    <Image 
    source={iconUrl}
     resizeMode='cover'
     style={styles.btnImg(dimemsion)}
    />
  </TouchableOpacity>
  )
}

export default ScreenHeaderBtn