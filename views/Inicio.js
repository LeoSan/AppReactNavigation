import React from 'react';

import { View, Text, StyleSheet, Button} from  'react-native';

const Inicio = ( { navigation } )=>{ //Esto Permite usar las propiedades de navegacion 

    console.log( navigation ); //Aqui podemos ver las funciones de navegacion esto se debe investigar 

const visitarNosotro = ()=>{
    navigation.navigate("Nosotros"); //Tiene que ser  el nombre conque registramos esta pagina en el App.js 
    //navigation.goBack();
    //navigation.push('Nosotros'); // Tiene un efecto diferente entre los stack
}

return (
    <View>
        <Text style={styles.contenedor}>Inicio</Text>
        <Button 
            title="Ir a Nosotros"    
            onPress={ ()=> visitarNosotro() }
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

export default Inicio; 