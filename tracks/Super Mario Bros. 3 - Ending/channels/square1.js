define(['_'], function (_) {
  var x75p = function (notes) {
    return _.map(notes, function (note) {
      return _.isArray(note) ? [note[0], note[1] * 0.75] : [note, 0.75]
    })
  }

  var prelude = [
    -10, -10, -9, -9, [null, 2],
    -7, -7, -6, -6, -5, -5, -9, -9,
    0, 0, -2, -2, -4, -4, -5, -5,
    -7, -7, -4, -4, -2, -2,
    -14, -14, -9, -9,

    -10, -10, -9, -9, [null, 2],
    -7, -7, -6, -6, -5, -5, -9, -9,
    0, 0, -2, -2, -4, -4, -5, -5,
    -7, -7, -4, -4, -2, -2,

    -14, -14, -9, -9, -10, -10, -5, -5,
    -3, -3, -1, -1, 2, 2, 0, 0,
    -1, -1, 0, 0, -2, -2, -4, -4,
    -2, -2, -1, -1, -4, -4, -2, -2,
    -14, -14, -4, -4,

    -10, -10, -9, -9, [null, 2],
    -7, -7, -6, -6, -5, -5, -9, -9,
    0, 0, -2, -2, -4, -4, -5, -5,
    -7, -7, -4, -4, -2, -2,
    -10, -10, -9, -9
  ]

  var overtune = x75p([
    [-10, 2], 2, [0, 2], -4, -7, -9, -10, null, -10, [null, 7]
  ])

  var verse = x75p([
    3, 5, 3, 2, 0, -2, [0, 2], 0, [-4, 2], [null, 5],
    -2, 0, -2, -4, -5, -7, [-9, 2], -9, [-5, 2], [null, 5],

    3, 5, 3, 2, 0, -2, [0, 2], 0, [-4, 2], [null, 5],
    -2, 0, -2, -4, -5, -7, [-9, 2], -9, [-5, 2], [null, 5],

    -9, -7, 8, 11, 10, 8, [7, 2], [null, 1], [3, 2], [null, 5],
    -9, -7, 8, 11, 10, 8, [7, 2], [null, 1], [3, 2], [null, 5],

    -9, -7, 8, 11, 10, 8, [7, 2], [null, 1], [10, 2], [null, 5],
    -4, -5, -4, -2, 0, -4, [2, 2], [null, 4]
  ])

  var chorus = x75p([
    [null, 2], -9, [10, 0.5], [7, 0.5], 3, -2, null,
    2, -9, -7, -7, [8, 0.5], [5, 0.5], 2, -2, [null, 2],
    [-4, 2], [-5, 1], [8, 0.5], [5, 0.5], 1, -2, null,
    -7, -9, -7, 0, [8, 0.5], [3, 0.5], 0, -4, [null, 2],

    [-7, 2], -9, [8, 0.5], [3, 0.5], -1, -4, null,
    -9, -10, -9, -2, [7, 0.5], [3, 0.5], -2, -5,
    [-14, 1.5], [-12, 1.5], -9, -12, [9, 0.5], [3, 0.5], 0, -3, null,
    -12, -13, -12, -10, [8, 0.5], [5, 0.5], 2, -2, null, null,

    [null, 2], -9, [10, 0.5], [7, 0.5], 3, -2, null,
    2, -9, -7, -7, [8, 0.5], [5, 0.5], 2, -2, [null, 2],
    [-4, 2], [-5, 1], [8, 0.5], [5, 0.5], 1, -2, null,
    -7, -9, -7, 0, [8, 0.5], [3, 0.5], 0, -4, [null, 2],

    [-7, 2], -9, [8, 0.5], [3, 0.5], -1, -4, null,
    -9, -10, -9, -2, [6, 0.5], [3, 0.5], -2, -5,
    [-14, 1.5], [-12, 1.5], -9, -12, [9, 0.5], [3, 0.5], 0, -3, null,
    -12, -13, -12, -10, null, -10, [null, 7]
  ])

  var notes = prelude
    .concat(overtune)
    .concat(verse)
    .concat(chorus)
    .concat(verse)
    .concat(chorus)

  return {
    name: 'square1',
    waveform: 'square',
    config: {
      instrument: {
        sampleRate: 44100,
        bpm: 233,
        fadeOut: {
          from: 0,
          to: 1.2
        }
      },
      audio: {
        volume: 0.2
      }
    },
    notes: notes
  }
})
