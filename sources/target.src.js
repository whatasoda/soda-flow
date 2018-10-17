module.exports = {
  code: async $ => {
    const lower = await $({
      type: 'ArrayExpression',
      start: 14,
      end: 69,
      id: 1,
      roles: {
        declaration: 'lower'
      }
    }, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
    const upper = await $({
      type: 'CallExpression',
      start: 85,
      end: 121,
      id: 2,
      roles: {
        declaration: 'upper'
      }
    }, (await $({
      type: 'MemberExpression',
      start: 85,
      end: 94,
      id: 5,
      roles: {}
    }, (await $({
      type: 'Identifier',
      start: 85,
      end: 90,
      id: 4,
      roles: {}
    }, lower)).map))((await $({
      type: 'ArrowFunctionExpression',
      start: 95,
      end: 120,
      id: 3,
      roles: {
        func: {
          isArrow: true
        }
      }
    }, async char => await $({
      type: 'CallExpression',
      start: 103,
      end: 120,
      id: 6,
      roles: {}
    }, (await $({
      type: 'MemberExpression',
      start: 103,
      end: 118,
      id: 8,
      roles: {}
    }, (await $({
      type: 'Identifier',
      start: 103,
      end: 107,
      id: 7,
      roles: {}
    }, char)).charCodeAt))())))));
  },
  src: 'const lower = [\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\', \'i\', \'j\', \'k\'];\nconst upper = lower.map(char => char.charCodeAt());'
};
