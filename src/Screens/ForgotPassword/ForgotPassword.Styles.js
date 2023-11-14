import {StyleSheet} from 'react-native';
import {Medium, Regular} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0091FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successText: {
    color: 'green',
    marginTop: 20,
  },
  emailsent: {
    fontSize: 16,
    fontFamily: Regular,
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
});
export default styles;
