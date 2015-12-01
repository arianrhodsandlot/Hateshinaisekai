define(function () {
  var prelude = [
    [13, 3], [13, 0.5], [13, 0.5], 13, 9, 9, 13, [14, 1.5], [11, 0.5], [11, 3],
    11, 11, 14,
    [13, 3], [13, 0.5], [13, 0.5], 13, 9, 9, 13, [11, 0.5], [13, 0.5], [14, 5],
    [16, 2],
    [13, 3], [13, 0.5], [13, 0.5], 13, 9, 9, 13, [14, 1.5], [11, 0.5], [11, 3],
    11, 11, 14,
    [13, 3], [13, 0.5], [13, 0.5], 13, 9, 9, 13, [11, 0.5], [13, 0.5], [14, 5],
    [17, 2]
  ]

  var overtune = [
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [11, 2], [9, 2],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [11, 2], [9, 2],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [6, 0.5], [4, 0.5], [6, 0.5], [9, 1.5], [6, 0.5], [null, 0.5],
    [11, 2], [9, 2],
    [6, 0.5], [6, 0.5], null, null, [9, 0.5], [9, 0.5], null, null, [11, 0.5], [11, 0.5], null, null,
    [13, 0.5], [null, 0.5], [13, 0.5], [13, 0.5], [13, 0.5], [13, 0.5], [13, 0.5], [null, 1.5], [13, 2],
  ]

  var verse = [
    -6, -3, [1, 0.5], [6, 1.5],
    [4, 0.5], [1, 0.5], [-1, 0.5], [-3, 0.5], [-4, 0.5], [-8, 1.5],
    [-10, 1.5], [-8, 1.5], [-6, 1], [-4, 1.5], [-3, 1.5], [-1, 1], [1, 1], [-1, 0.5], [1, 10.5],
    [4, 2], [2, 2], [1, 7],
    [2, 0.5], [1, 0.5], [-1, 3], [-3, 3], [-4, 2],

    -6, -3, [1, 0.5], [6, 1.5],
    [4, 0.5], [1, 0.5], [-1, 0.5], [-3, 0.5], [-4, 0.5], [-8, 1.5],
    [-10, 1.5], [-8, 1.5], [-6, 1], [-4, 1.5], [-3, 1.5], [-1, 1], [1, 1], [-1, 0.5], [1, 10.5],
    [4, 2], [2, 2], [1, 7],
    [2, 0.5], [1, 0.5], [-1, 3], [-3, 3], [-4, 2],
  ]

  var chorus = [
    [-3, 0.5], [-4, 0.5], [-6, 0.5], [-8, 0.5], [-6, 0.5], [1, 1.5],
    [-3, 0.5], [-4, 0.5], [-6, 0.5], [-8, 0.5], [-6, 0.5], [1, 1.5],
    [-3, 0.5], [-4, 0.5], [-6, 0.5], [-8, 0.5], [-6, 0.5], [1, 1.5],
    [-1, 1.5], [-3, 1.5], -4,
    [-3, 0.5], [-4, 0.5], [-6, 0.5], [-8, 0.5], [-6, 0.5], [1, 1.5],
    [-3, 0.5], [-4, 0.5], [-6, 0.5], [-8, 0.5], [-6, 0.5], [1, 1.5],
    [-3, 0.5], [-4, 0.5], [-6, 0.5], [-8, 0.5], [-6, 0.5], [1, 1.5],
    [-1, 1.5], [-3, 1.5], -4,

    [-6, 1.5], [-4, 1.5], -3,
    [-4, 1.5], [-3, 1.5], -1,
    [1, 1.5], [-1, 1.5], -3,
    [-4, 2], [-8, 2],
    [-10, 1.5], [-8, 1.5], -6,
    [-4, 1.5], [-3, 1.5], -1,
    [1, 1], [null, 2.5], [1, 0.5], [1, 0.5],
    [1, 0.5], [null, 1.5], [1, 2],
  ]

  var main = overtune
    .concat(verse)
    .concat(chorus)

  return prelude
    .concat(main)
    .concat(main)
})
