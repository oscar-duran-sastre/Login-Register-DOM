
import { store } from './store.js';

const emailExistsInArray = email => store.findIndex((value) => value.email === email);

export { emailExistsInArray };
