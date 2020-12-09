import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
        <Stack.Screen name="TelaA" 
                      options={{title: 'Primeira Tela'}}>
                      {props => (
                          <PassoStack {...props} avancar="TelaB">
                            <TelaA />
                          </PassoStack>
                      )}
        </Stack.Screen>
        <Stack.Screen name="TelaB" options={{title: 'Segunda Tela'}}>
                      {props => (
                          <PassoStack {...props} voltar avancar="TelaC">
                            <TelaB />
                          </PassoStack>
                      )}
        </Stack.Screen>
        <Stack.Screen name="TelaC" options={{title: 'Terceira Tela'}}>
                      {props => (
                          <PassoStack {...props} voltar avancar="TelaC">
                            <TelaC />
                          </PassoStack>
                      )}
        </Stack.Screen>
    </Stack.Navigator>
)