import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'flex-end',
  },
  container: {
    height: 174,
  },
  content: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading
  },
  footer: {
    flexDirection: 'row',
    marginHorizontal: 24
  },
  cancel: {
    width: '50%',
    height: 56,
    borderRadius: 8,
    marginRight: 8,
    borderColor: theme.colors.secondary30,
    borderWidth: 1,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    flex: 1,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
  },
  confirmButton: {
    width: '50%',
    backgroundColor: theme.colors.primary,
    color: theme.colors.heading,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  }
})