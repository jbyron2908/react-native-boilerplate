import I18n from 'react-native-i18n';
import en from './languages/en';
import ptBr from './languages/ptBr';

const Translator = I18n;

Translator.fallbacks = true;

Translator.translations = {
  en,
  pt: ptBr,
};

export default Translator;
