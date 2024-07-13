import CouchImg from './images/couch.jpg';
import FingersImg from './images/fingers.jpg';
import FireImg from './images/fire.jpg';
import WavesCrashingOnRocksImg from './images/waves_crashing_on_rocks.jpg';
import LowThunderImg from './images/low_thunder.jpg';
import KeyboardTypingImg from './images/keyboard_typing.jpg';
import HandSoundImg from './images/handsound.jpg';
import HairWashSoundImg from './images/hairwash.jpg';
import fireMp3 from './sounds/fire.mp3';
import wavesCrashingOnRocksMp3 from './sounds/waves_crashing_on_rocks.mp3';
import lowThunderMp3 from './sounds/low_thunder.mp3';
import keyboardTypingMp3 from './sounds/keyboard_typing.mp3';
import couchMp4 from './sounds/couch_tapping.mp4';
import handSoundsMp3 from './sounds/handsounds.mp3';
import hairWashSoundsMp3 from './sounds/hairwash.mp3';
import {Howl, Howler} from 'howler';

// We use sprites for the songs as a trick. Just playing the sound in a loop creates a noticeable gap
// read more about it here https://github.com/goldfire/howler.js/issues/360
export default [
    {
        id: 'couch-tapping',
        title: 'Couch Tapping',
        sound: new Howl({
            src: [couchMp4],
            sprite: {
                main: [100, 30000, true]
            },
            onend: function() {
                console.log('Finished Fire!');
            }
        }),
        isPlaying: false,
        volume: 70,
        img: CouchImg
    },
    {
        id: 'fire',
        title: 'Fire',
        sound: new Howl({
            src: [fireMp3],
            sprite: {
                main: [100, 27000, true]
            },
            onend: function() {
                console.log('Finished Fire!');
            }
        }),
        isPlaying: false,
        volume: 50,
        img: FireImg
    },
    {
        id: 'waves-crashing-on-rocks',
        title: 'Waves Crashing on Rocks',
        sound: new Howl({
            src: [wavesCrashingOnRocksMp3],
            sprite: {
                main: [100, 45000, true]
            },
            onend: function() {
                console.log('Finished Crashing on Rocks!');
            }
        }),
        isPlaying: false,
        volume: 50,
        img: WavesCrashingOnRocksImg
    },
    {
        id: 'low-thunder',
        title: 'Low Thunder',
        sound: new Howl({
            src: [lowThunderMp3],
            sprite: {
                main: [100, 8000, true]
            },
            onend: function() {
                console.log('Finished low thunder!');
            }
        }),

        isPlaying: false,
        volume: 50,
        img: LowThunderImg
    },
    {
        id: 'keyboard-typing',
        title: 'Keyboard',
        sound: new Howl({
            src: [keyboardTypingMp3],
            sprite: {
                main: [100, 7000, true]
            },
            onend: function() {
                console.log('Finished keyboard typing!');
            }
        }),
        isPlaying: false,
        volume: 50,
        img: KeyboardTypingImg
    }
    ,
        {
            id: 'hand-sounds',
            title: 'Hand Sounds',
            sound: new Howl({
                src: [handSoundsMp3],
                sprite: {
                    main: [100, 7000, true]
                },
                onend: function() {
                    console.log('Finished hand sounds!');
                }
            }),
            isPlaying: false,
            volume: 100,
            img: HandSoundImg
        }
        ,
        {
            id: 'hair-wash',
            title: 'Hair Wash',
            sound: new Howl({
                src: [hairWashSoundsMp3],
                sprite: {
                    main: [100, 7000, true]
                },
                onend: function() {
                    console.log('Finished air wash sounds!');
                }
            }),
            isPlaying: false,
            volume: 100,
            img: HairWashSoundImg
        }
]