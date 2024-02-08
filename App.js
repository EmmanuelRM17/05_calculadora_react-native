import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.calculadora}>
        <View style={styles.borde}>
          <Text style={styles.tituloCalculadora}>CALCULADORA</Text>
          <View style={styles.resultado}>
            <Text style={styles.textoResultado}>0</Text>
          </View>
          <View style={styles.botones}>
            <View style={styles.filabotones}>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>^</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>/</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>C</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>←</Text></TouchableOpacity>
            </View>
            <View style={styles.filabotones}>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>7</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>9</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>*</Text></TouchableOpacity>
            </View>
            <View style={styles.filabotones}>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>4</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>5</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>6</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>-</Text></TouchableOpacity>
            </View>
            <View style={styles.filabotones}>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>3</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>+</Text></TouchableOpacity>
            </View>
            <View style={styles.filabotones}>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>±</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>0</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>.</Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={styles.texto}>=</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculadora: {
    width: '100%',
    height: '90%',
    backgroundColor: '#000000',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#363636',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 25,
  },
  borde: {
    flex: 1,
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#f3d0b3',
  },
  tituloCalculadora: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },
  resultado: {
    backgroundColor: '#fae5c9',
    alignSelf: 'stretch',
    textAlign: 'right',
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: '#1f1f1f',
    borderRadius: 5,
    marginHorizontal: 20, 
    padding: 30,
  },
  textoResultado: {
    fontSize: 30, 
  },
  botones: {
    width: '90%',
    padding: 10, 
  },
  filabotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    marginBottom: 5, 
  },
  button: {
    width: 80,
    height: 90, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0be95',
    borderRadius: 20, 
    margin: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },
  texto: {
    fontSize: 30, 
    color: '#000000',
  },
});
