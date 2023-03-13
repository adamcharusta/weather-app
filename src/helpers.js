import { deburr, flow, lowerCase } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const deburAndLowerCase = flow([deburr, lowerCase]);
