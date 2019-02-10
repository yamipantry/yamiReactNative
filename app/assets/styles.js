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
  recipeImage: {
    borderRadius: 25,
    width: 300,
    alignSelf: 'center',
  },
  recipescard: {
    marginVertical: 15,
  },
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  screenSignUp: {
    padding: 2,
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
    margin: 30,
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
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    //marginLeft: 10,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
  },
  text1: {
    fontSize: 17,
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
    width: 300,
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  containerFriends: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  CircleContainer: {
    marginRight: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  menuText: {
    fontWeight: '300',
    fontSize: 15,
    paddingLeft: 10,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.border.base,
  },
  addContainer: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editFriendButtons: {
    width: 20,
    height: 20,
  },
}));
