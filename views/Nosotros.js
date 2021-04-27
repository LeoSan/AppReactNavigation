import React from 'react';

import { View, Text, StyleSheet, Button} from  'react-native';

const Nosotros = ( { navigation } )=>{ //Esto Permite usar las propiedades de navegacion 

    console.log( navigation ); //Aqui podemos ver las funciones de navegacion esto se debe investigar 

    const visitarInicio = ()=>{
        navigation.navigate("Inicio"); //Tiene que ser  el nombre conque registramos esta pagina en el App.js 
    }

return (

    <View>
    <Text style={styles.contenedor}>Nosotros</Text>
    <Button 
        title="Ir a Inicio"    
        onPress={ ()=> visitarInicio() }
    />
</View>
);
}

const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
    },
  });


export default Nosotros; 