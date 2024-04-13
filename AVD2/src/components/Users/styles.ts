import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  code: {
    flex: 1,
    color: 'deepskyblue',
    fontSize: 18,
    marginLeft: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    width: 56,
    backgroundColor: 'red',
    borderRadius: 10/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  middle: {
    backgroundColor: '#1F1E25',
    flex: 1,
    marginRight: 2,
    height: 120,
    borderRadius: 10/2,
  },
  form: {
    flexDirection: 'row',
    width: '100%',
  }
})

