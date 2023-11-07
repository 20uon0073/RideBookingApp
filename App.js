import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import RoootNavigator from './src/navigations/RootNavigator'
import { OriginContextProvider,DestinationContextProvider } from './src/contexts/contexts'


const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
           <RoootNavigator/>
      </OriginContextProvider>
      </DestinationContextProvider>
      
  
  )
}

export default App

const styles = StyleSheet.create({

container:{
  flex:1
}


})