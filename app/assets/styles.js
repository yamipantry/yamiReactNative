import { RkStyleSheet } from 'react-native-ui-kitten';
import { scaleVertical } from '../utils/scale';
import { StyleSheet, Platform } from 'react-native';

export default RkStyleSheet.create(theme => ({
  header: {
    paddingVertical: 25,
  },

  settingheader: {
    paddingBottom: 12.5,
  },
  section: {
    marginVertical: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.screen.base,
    paddingTop: 18,
    marginLeft: 1,
    marginRight: 1,
    fontWeight: 'bold',
    fontSize: 19,
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    flex: -1,
  },
  containerSingleRecipe: {
    flex: 1,
  },
  recipescontainer: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  recipescard: {
    marginVertical: 8,
  },
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  screenSignUp: {
    padding: 16,
    justifyContent: 'space-around',
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(210),
    resizeMode: 'contain',
  },
  imageSingleRecipe: {
    width: 270,
    height: 220,
    alignSelf: 'center',
    justifyContent: 'center',
    margin:30
  },
  contcenter: {
    alignItems: 'center',
  },
  footer: {
    flex: 0,
    justifyContent: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
  },
  button: {
    marginHorizontal: 14,
  },
  save: {
    marginVertical: 9,
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: scaleVertical(14),
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  content: {
    justifyContent: 'space-between',
  },

  headerSingleRecipe: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 40
  },
  subheading: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 25,
  },
  text1: {
    fontSize: 25,
    color: 'red',
  },
  containerDrawerScreen: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  contentDrawerScreen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme.colors.screen.base,
  },
  textDrawer: {
    fontSize: 15,
    paddingLeft: 15,
    fontWeight: '300',
  },
}));
