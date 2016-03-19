import color from 'color2';
import { List } from 'immutable';
import { hashHistory } from 'react-router';

export function checkHex(text) {
  return text.match(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/);
}

export function getHex(hwb) {
  return color().hwb(hwb).hexString();
}

export function getHwb(hex) {
  return color.parse(hex).hwbArray();
}

function getHexURL(picked) {
  return picked.reduce((a, v) => a.concat(getHex(v).replace('#', '-')), '');
}

function isUrlSyncPicked(picked, pathname) {
  const pickedHex = (picked.length === 0) ? '' : getHexURL(picked);
  const pathHex = (pathname === '/') ? '' : pathname.replace('/picked/', '');

  return pickedHex === pathHex;
}

export function syncPickedWithUrl(picked, pathname) {
  let newPicked = [];
  const hwb = picked.toJS();

  if ((hwb.length === 0 && pathname.match(/^\/picked\/\-\S+$/))
    || !isUrlSyncPicked(hwb, pathname)) {
    /* eslint-disable new-cap */
    newPicked = pathname.split('-').filter(v => checkHex(`#${v}`)).map(v => List(getHwb(`#${v}`)));
    /* eslint-enable new-cap */
  } else {
    newPicked = picked;
  }

  return newPicked;
}

export function pickedPushToUrl(picked, adjust = []) {
  const items = picked.map(v => v.toJS());
  if (adjust.length > 0) items.push(adjust);
  hashHistory.push((items.length === 0) ? '/' : `/picked/${getHexURL(items)}`);
}
