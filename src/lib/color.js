import { List } from 'immutable';
import color from 'color2';

export function checkHex(text) {
  return text.match(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/);
}

export function getHex(hwb) {
  return color().hwb(hwb).hexString();
}

export function getHwb(hex) {
  return color.parse(hex).hwbArray();
}

export function getHexURL(picked) {
  let url = '';
  picked.forEach((v) => {
    url += getHex(v).replace('#', '-');
  });
  return url;
}

export function isUrlsyncPicked(picked, pathname) {
  const pickedHex = getHexURL(picked);
  const pathHex = pathname.replace('/picked/', '');

  return pickedHex === pathHex;
}

export function syncPickedWithUrl(picked, pathname) {
  let newPicked = [];
  const hwb = picked.toJS();

  if ((hwb.length === 0 && pathname.match(/^\/picked\/\-\S+$/))
    || !isUrlsyncPicked(hwb, pathname)) {
    const hexArr = pathname.split('-');
    hexArr.forEach((v) => {
      const hex = `#${v}`;
      if (checkHex(hex)) {
        newPicked.push(List(getHwb(hex))); // eslint-disable-line new-cap
      }
    });
  } else {
    newPicked = picked;
  }

  return newPicked;
}
