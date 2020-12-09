import React from 'react';
import TextoCentral from '../components/TextoCentral';
import {Button, View} from 'react-native';


export default props => {
 return(
 <View style={{flex: 1}}>
     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title='Abrir'
                onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                        props.navigation.closeDrawer()
                        }, 3000)
                        }} 
        />
        
     </View>
    <View style={{flex: 1}}>
    <TextoCentral corFundo='#33FA72' corTexto='#000'>
        Tela D
    </TextoCentral>

    </View>
 </View>
    )
}