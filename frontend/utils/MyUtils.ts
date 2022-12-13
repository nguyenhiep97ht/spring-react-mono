import { replace } from 'lodash';

export function replacer(match: any, p1: any, p2: any, p3: any, offset: any, string: any) {
  return [p1, p2, p3].join(' ');
}

export function toPhone(phone: string) {
  if (phone) {
    return replace(phone, new RegExp(/[\s]/, 'g'), '');
  }
  return '';
}

export function toNumber(currency: string | number) {
  if (currency) {
    return replace(`${currency}`, new RegExp(/[,]/, 'g'), '');
  }
  return '';
}
