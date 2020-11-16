import { Details } from '../services/API/type';

export const getText = (obj: Details ,selectedLang: string) => {
  return obj?.flavor_text_entries.find( ({language}) => language.name === selectedLang)?.flavor_text as string; 
};