import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 40
  },
  fiscalNote: {
    fontSize: 26,
    color: 'deepskyblue',
    fontWeight: 'bold',
    marginTop: 48,
    textAlign: 'center'
  },
  fiscalSupplier: {
    fontSize: 16,
    color: 'white',
  },
  stateCase: {
    height: 56,
    backgroundColor: 'transparent',
    color: 'white',
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    marginRight: 4,
    marginBottom: 6,
    textTransform: 'uppercase'
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    color: 'white',
    padding: 16,
    fontSize: 16,
    borderRadius: 100/2,
    marginRight: 4,
    marginBottom: 6
  },
  buttonText: {
    color: 'deepskyblue',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    height: 56,
    backgroundColor: 'transparent',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 24,
    marginBottom: 36,
  },
  listEmptyText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
})