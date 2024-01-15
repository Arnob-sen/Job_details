import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router'; // Removed Stack from here
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from './constants';

import Nearbyjobs from './components/home/nearby/Nearbyjobs';
import Popularjobs from './components/home/popular/Popularjobs';
// import JobDetailsScreen from './components/details/JobDetailsScreen';
import Welcome from './components/home/welcome/Welcome';
import ScreenHeaderBtn from './components/common/header/ScreenHeaderBtn';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); // This is the only Stack declaration now

export default function App() {
  const router=useRouter();
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Navigator>
          <Stack.Screen
             name="welcome"
             component={Welcome}
            options={{
              headerStyle:{backgroundColor:COLORS.lightWhite},
              headerShadowVisible:false,
              headerLeft:()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimemsion='60%' />
              ),
              headerRight:()=>(
                <ScreenHeaderBtn iconUrl={images.profile} dimemsion='100%' />
              ),
              headerTitle:""
            }}
          />
     
          {/* Add other screens here */}
        </Stack.Navigator>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1,padding:SIZES.medium}}>
              {/* <Welcome/> */}
            <Popularjobs/>
            <Nearbyjobs/>
            </View>
          </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
