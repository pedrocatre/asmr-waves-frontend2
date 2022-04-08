import sounds from './sounds.js';
import Sound from './Sound';
import 'react-rangeslider/lib/index.css'
import './SoundsList.css';
import React, {Component} from 'react';

class SoundsList extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.user", this.props.user);
        this.state = {
            isMuted: false,
            sounds: sounds,
            combinationTitle: '',
            playingCombinationTitle: '',
            combinations: []
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClickPlayCombination = this.handleClickPlayCombination.bind(this);
        // this.handleClickDeleteCombination = this.handleClickDeleteCombination.bind(this);
        this.handleChangeVolume = this.handleChangeVolume.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeVolume(i, volume) {
        const sounds = this.state.sounds.slice();
        sounds[i].sound.volume(volume / 100.0);
        sounds[i].volume = volume;
        this.setState({
            playingCombinationTitle: '',
            sounds: sounds
        });
    }

    handleClick(i) {
        const sounds = this.state.sounds.slice();
        sounds[i].isPlaying = !sounds[i].isPlaying;
        sounds[i].sound.volume(sounds[i].volume / 100.0);
        if (!this.state.isMuted) {
            // We only want to play if it is not muted
            // likewise if it is muted there is no point in pausing
            sounds[i].isPlaying ? sounds[i].sound.play('main') : sounds[i].sound.pause();
        }

        this.setState({
            playingCombinationTitle: '',
            sounds: sounds
        });
    }

    renderSounds() {
        return this.state.sounds.map((sound, index) => {
            return <Sound
                key={sound.id}
                index={index}
                sound={sound}
                handleChangeVolume={this.handleChangeVolume}
                onClick={() => this.handleClick(index)}
            />
        })
    }

    render() {
        return (
            <main style={{ padding: "1rem 0" }}>
                <h2>SoundList</h2>

                <div className="row">
                    {this.renderSounds()}
                </div>
            </main>
        );
    }

}

export default SoundsList;