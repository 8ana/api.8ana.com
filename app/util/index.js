'use strict';
const multipliers = [0x1000000, 0x10000, 0x100, 1];
module.exports = {
  toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
  },
  ip2long(ip) {
    let longValue = 0;
    ip.split('.').forEach((part, i) => {
      longValue += part * multipliers[i];
    });
    return longValue;
  },
  long2ip(longValue) {
    return multipliers
      .map(multiplier => {
        return Math.floor((longValue % (multiplier * 0x100)) / multiplier);
      })
      .join('.');
  },
};
