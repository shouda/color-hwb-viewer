import color from 'color2';

export function checkHex(text) {
  return text.match(/^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/);
}

export function getHex(hwb) {
  return color().hwb(hwb).hexString();
}

export function getHexURL(picked) {
  return picked.reduce((a, v) => a.concat(getHex(v).replace('#', '-')), '');
}

export function getHwb(hex) {
  return color.parse(hex).hwbArray();
}

function isUrlSyncPicked(picked, pathname) {
  const pickedHex = (picked.length === 0) ? '' : getHexURL(picked);
  const pathHex = (pathname === '/') ? '' : pathname.replace('/picked/', '');
  return pickedHex === pathHex;
}

export function syncPickedWithUrl(picked, pathname) {
  let newPicked = [];
  if ((picked.length === 0 && pathname.match(/^\/picked\/-\S+$/))
    || !isUrlSyncPicked(picked, pathname)) {
    newPicked = pathname.split('-').filter(v => checkHex(`#${v}`)).map(v => getHwb(`#${v}`));
  } else {
    newPicked = picked;
  }
  return newPicked;
}
