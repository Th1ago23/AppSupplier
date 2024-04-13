import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

import { styles } from './styles';
import { Users } from "../../components/Users";

type Props = {
  id: string,
  code: string,
  valueimpost: string,
  supplier: string,
  state: string,
  adjustmentvalue: string,
}

export function Home() {
  const [code, setCode] = useState('')
  const [valueimpost, setValueImpost] = useState('')
  const [supplier, setSupplier] = useState('')
  const [state, setState] = useState('')
  const [adjustmentvalue, setAdjustmentValue] = useState('')
  const [users, setUsers] = useState<Props[]>([])

  function handleAdd() {
    if (code.trim() === '' && supplier.trim() === '' &&
      state.trim() === '' && valueimpost.trim() === ''){
      return Alert.alert('Usuário', 'Favor preencha os campos')
    }
    const validCodes = ['1234', '6789', '1708', '5952'];
    if (!validCodes.includes(code)) {
      Alert.alert('Código', 'Código inválido, são aceitos apenas os códigos 1234, 6789, 1708, 5952')
      return;
    }    

    const validStates = ['RJ','SP','MG'];
    const stateUpper = state.toUpperCase();

    if (validStates.includes(stateUpper)) {
      setState(stateUpper);
    }
    else {
      Alert.alert('Estado', 'Estado inválido, são aceitos apenas os estados RJ, SP, MG')
      return;
    }
    
    const validSuppliers = ['Microsoft','microsoft', 'Totvs', 'totvs'];
    if (!validSuppliers.includes(supplier)) {
      Alert.alert('Fornecedor', 'Fornecedor inválido, são aceitos apenas os fornecedores Microsoft e Totvs')
      return;
    }

    let impostValue = 0;

    if (code === '1234' || code === '6789' && stateUpper === 'RJ') {
      
     impostValue = 0.01;
     const readjustmentValue = parseFloat(valueimpost) * impostValue;
     Alert.alert('Valor do Imposto', `O valor de ajuste do imposto é de R$ ${readjustmentValue}`);
    

    } 

    else if(code === '1234' || code === '6789' && stateUpper === 'SP') {
      
     impostValue = 0.02;
     const readjustmentValue = parseFloat(valueimpost) * impostValue;
     Alert.alert('Valor do Imposto', `O valor de ajuste do imposto é de R$ ${readjustmentValue}`);
     


    }
    else if(code === '1234' || code === '6789' && stateUpper === 'MG') {
      
     impostValue = 0.03;
     const readjustmentValue = parseFloat(valueimpost) * impostValue;
     Alert.alert('Valor do Imposto', `O valor de ajuste do imposto é de R$ ${readjustmentValue}`)
    }
    
    else {
      Alert.alert('Valor do Imposto', 'Não há imposto para este código')
    }


    const data = {
      id: String(new Date().getTime()),
      code,
      valueimpost,
      supplier,
      adjustmentvalue: adjustmentvalue,
      state: stateUpper,
    }

    console.log(data)
    setUsers([...users, data])
    setCode('')
    setValueImpost('')
    setSupplier('')
    setAdjustmentValue('')
    setState('')
   }
  
  function handleRemove(id: string) {
    Alert.alert('Remover', 'Remover o cadastro da nota fiscal', [
      {
        text: 'Sim',
        onPress: () => setUsers(users =>
          users.filter(user => user.id !== id))
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.fiscalNote}>
        Cadastro de Nota Fiscal
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Código do Imposto"
          placeholderTextColor='#6B6B6B'
          autoCapitalize="words"
          value={code}
          onChangeText={value => setCode(value)}
          maxLength={4}
        />
        <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Valor da Nota Fiscal"
          placeholderTextColor='#6B6B6B'
          autoCapitalize="words"
          value={valueimpost}
          onChangeText={value => setValueImpost(value)}
          />

        <TextInput
          style={styles.input}
          placeholder="Fornecedor"
          placeholderTextColor='#6B6B6B'
          autoCapitalize="none"
          value={supplier}
          onChangeText={value => setSupplier(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Estado"
          placeholderTextColor='#6B6B6B'
          autoCapitalize="words"
          value={state}
          onChangeText={value => setState(value)}
          maxLength={2}
          
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAdd}>
          <Text style={styles.buttonText}>
            Incluir
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Users
            data={item}
            onRemove={() => handleRemove(item.id)}
          />
        )}

      />



    </View>
    </View>
  )
}

