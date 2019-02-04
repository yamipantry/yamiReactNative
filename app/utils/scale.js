import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const scaleVertical = size => (height / guidelineBaseHeight) * size;
const scaleModerate = (size, factor = 0.5) => size + ((scale(size) - size) * factor);


const randomString = () => {
  const string = ['Live today like there\'s no tomorrow', 'Always be', 'Stranger things have happened', 'What\'s on Netflix today?', 'Live, laugh, love'] 
  const idx = Math.floor(Math.random() * Math.floor(5))
  return string[idx]
  
}

export { scale, scaleVertical, scaleModerate, randomString };
