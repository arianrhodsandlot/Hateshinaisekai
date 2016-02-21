# Family Jukebox

## Website

http://arianrhodsandlot.github.io/Family-Jukebox/

## About

Create chiptune (8-bit music) with JavaScript in your browser!

Try [this example](http://arianrhodsandlot.github.io/Family-Jukebox/tracks/Super%20Mario%20Bros.%20-%20Ground%20Theme/) if you are still confused by what it is.

## Details

Generated audios sources are in format WAV, which can be played by modern browsers when it's wrapped with HTML5 `audio` tag.

Audios' waveforms are just those ever used in Nintendo's <abbr title="Family Computer">Famicom</abbr>, which also known as <abbr title="Nintendo Entertainment System">NES</abbr> in North America, such as square wave, trangle wave, and noise. The DPCM channel is not suported yet.

For those who want to take a try, here are some tips.

+ A *track* is composed by some different *channels*. You can fill a *channel* with an array in JavaScript.

 Each value of this array represents a note of the sheet music. The browser will generate an [A](https://en.wikipedia.org/wiki/A440_%28pitch_standard%29) when here is an `0` in the array, and an A♭ for `-1`, a G for `-2`, a [rest](https://en.wikipedia.org/wiki/Rest_%28music%29) for `null`, etc.

 The easiest way to get started is make a copy of the [`./tracks/boilerplate`](https://github.com/arianrhodsandlot/Family-Jukebox/tree/master/tracks/boilerplate/) folder. Give the folder a awesome name like "melody" and enter it. The only things need to do is modifing files in `channels` folder and the `manifest.js`. Serve the project folder with an HTTP server such as [http-server](https://github.com/indexzero/http-server), then open your `http://localhost[:PORT]/tracks/melody/` with your browser.

+ For technical details, take a look at the [`./assets/js/track.js`](https://github.com/arianrhodsandlot/Family-Jukebox/tree/master/assets/js/track.js).

+ For even more advanced technical details...
  - Take a look at the codes in [`./assets/js/instrument.js`](https://github.com/arianrhodsandlot/Family-Jukebox/tree/master/assets/js/instrument.js).

  - Take a look at [Pedro Ladaria](https://twitter.com/pladaria)'s project [riffwave.js](http://codebase.es/riffwave/). Since [the original homepage of this project](http://codebase.es/riffwave/) may be not available at this time, you can get it's source from [my backup Gist](https://gist.github.com/arianrhodsandlot/218e74f35e5f3a848754).

## License

MIT
