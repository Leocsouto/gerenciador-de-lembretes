
import { useState } from 'react';
import {
  Button
  , FlatList
  , ScrollView
  , StyleSheet
  , TextInput
  , Text
  , View
}
  from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState('');
  const [lista, setLista] = useState([]);

  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }
  const adicionarLembrete = () => {
    setLista(lista => {
      const aux = [lembrete, ...lista]
      setLembrete('')
      return aux
    })

  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.lembreteTextInput}
          placeholder='ESCREVA O TEXTO'
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button
          title='OK'
          onPress={adicionarLembrete}
        />
      </View>
      <FlatList
        data={lista}
        renderItem={(lista) =>
          <View style={styles.itemLista}>
            <Text>
              {lista.item}
            </Text>
          </View>
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    width: '100%',
    marginBottom: 10
  },
  lembreteTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 12,
    textAlign: 'center',
    outlineStyle: 'none',
    marginBottom: 5
  },
  itemLista: {
    marginTop: 10,
    textAlign: 'center',
    padding: 12,
    borderWidth: 1,
    backgroundColor: '#DDD',
    borderColor: '#AAA'
  }

})


{/* <ScrollView>
{lista.map((i) =>
  <View style={styles.itemLista}>
    <Text>
      {i}
    </Text>
  </View>
)}
</ScrollView> */}