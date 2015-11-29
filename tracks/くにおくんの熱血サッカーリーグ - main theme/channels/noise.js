window.define(['_'], function (_) {
  var prelude = [
    [0, 0.5], [null, 2.5], [0, 0.5], [0, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 1], [0, 0.5], [0, 0.5], [null, 2.5],
    [null, 3],
    [0, 0.5], [null, 2.5], [0, 0.5], [0, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [0, 0.5], [0, 0.5], [null, 4.5],
    [null, 2],
    [0, 0.5], [null, 2.5], [0, 0.5], [0, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 1], [0, 0.5], [0, 0.5], [null, 2.5],
    [null, 3],
    [0, 0.5], [null, 2.5], [0, 0.5], [0, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [null, 0.5], [0, 0.5], [0, 0.5], [0, 0.5], [null, 4.5],
    [null, 2]
  ]

  var overtune = [
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 4],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 4],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 2], [0, 0.5], [null, 1.5],
    [null, 4],
    [6, 0.5], [6, 0.5], null, null, [9, 0.5], [9, 0.5], null, null, [11, 0.5], [11, 0.5], null, null,
    [13, 0.5], [null, 0.5], [13, 0.5], [13, 0.5], [13, 0.5], [13, 0.5], [13, 0.5], [null, 1.5], [null, 2],
  ]

  var verse = _.flatten(_.map(_.times(24), _.constant([
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4]
  ])))

  var chorus = [
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [null, 4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [null, 4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],

    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.1], [null, 0.9], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],
    [0, 0.8], [null, 0.2], [0, 0.1], [null, 0.4], [0, 0.1], [null, 0.4],

    [0, 0.8], [null, 0.2], [null, 2.5], [0, 0.4], [null, 0.1], [0, 0.4], [null, 0.1],
    [0, 0.4], [null, 0.1], [null, 1.5], [0, 2]
  ]

  var main = overtune
    .concat(verse)
    .concat(chorus)

  return prelude
    .concat(main)
    .concat(main)
})
