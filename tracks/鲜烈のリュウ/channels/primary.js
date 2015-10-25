window.define(function () {
  var prelude = [[null, 8]]
  var overtune = [
    -3, 0, -3, 2, [-5, 0.5], -3, [-5, 0.5], -3, 4, [-3, 0.5], -3, [-3, 0.5], -3, -1, 0, -1, -3, null,
    -1, -3, 2, -1, [-3, 0.5], -1, [-3, 0.5], -1, 4, [-1, 0.5], -1, [-1, 0.5], -1, 0, 2, 0, -1, null,

    -3, 0, -3, 2, [-5, 0.5], -3, [-5, 0.5], -3, 4, [-3, 0.5], -3, [-3, 0.5], -3, -1, 0, -1, -3, null,
    -1, -3, 2, -1, [-3, 0.5], -1, [-3, 0.5], -1, 4, [-1, 0.5], -1, [-1, 0.5], -1, 0, 2, 0, -1, null
  ]
  var verse = [
    -3, null, -5, null, -7, null, -8, [null, 2], -8, -8, -8, -8, -8,

    -3, -1, 0, -1, 0, -3, null,
    4, 2, 0, 2, 0, 2, -3, null,
    0, -1, -3, -5, -3, -1, 7, null,
    5, 4, 2, 4,
    [null, 4],

    -8, -3, -1, 0, -1, 0, -3, null,
    4, 2, 0, 2, 0, 2, -3, null,
    0, -1, -3, -5, -3, -1, 7, null,
    5, 4, 2, 4,
    [null, 4]
  ]
  var chorus = [
    [-8, 0.5], [-5, 0.5], [-3, 0.5], [-1, 0.5], [0, 0.5], [2, 0.5],

    0, [-1, 0.5], 0, [-3, 0.5], 0, [-1, 0.5], 0, [-3, 0.5], [2, 0.5], [0, 0.5], [-1, 0.5], [0, 0.5],
    0, [-1, 0.5], 0, [-3, 0.5], 0, [-1, 0.5], 0, [-3, 0.5], [2, 0.5], [0, 0.5], [-1, 0.5], [-3, 0.5],
    2, [0, 0.5], 2, [-1, 0.5], 2, [0, 0.5], 2, [-1, 0.5], [4, 0.5], [2, 0.5], [0, 0.5], [-1, 0.5], [-3, 0.5], [-5, 0.5], [-8, 0.5], [-7, 0.5],
    [-3, 0.5], [-8, 0.5], [-5, 0.5], [-3, 0.5], [0, 0.5], [-1, 0.5], [-3, 0.5], [-5, 0.5], 4, 2,

    0, [-1, 0.5], 0, [-3, 0.5], 0, [-1, 0.5], 0, [-3, 0.5], [2, 0.5], [0, 0.5], [-1, 0.5], [0, 0.5],
    0, [-1, 0.5], 0, [-3, 0.5], 0, [-1, 0.5], 0, [-3, 0.5], [2, 0.5], [0, 0.5], [-1, 0.5], [-3, 0.5],
    2, [0, 0.5], 2, [-1, 0.5], 2, [0, 0.5], 2, [-1, 0.5], [4, 0.5], [2, 0.5], [0, 0.5], [-1, 0.5], [-3, 0.5], [-5, 0.5], [-8, 0.5], [-7, 0.5],
    [-3, 0.5], [-8, 0.5], [-5, 0.5], [-3, 0.5], [0, 0.5], [-1, 0.5], [-3, 0.5], [-5, 0.5], 4, 2
  ]

  return prelude
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
})
