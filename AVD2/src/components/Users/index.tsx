import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
  id: string,
  code: string,
  valueimpost: string,
  supplier: string,
  state: string,
  adjustmentvalue: string,
}

type PropsData = {
  data: Props
  onRemove: () => void
}

export function Users({ data, onRemove }: PropsData) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.middle}>
          <Text style={styles.code}>
            {data.code}
          </Text>
          <Text style={styles.code}>
            {data.valueimpost}
          </Text>
          <Text style={styles.code}>
            {data.supplier}
          </Text>
          <Text style={styles.code}>
            {data.state}
          </Text>
          <Text style={styles.code}>
            {data.adjustmentvalue}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onRemove}
        >
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}