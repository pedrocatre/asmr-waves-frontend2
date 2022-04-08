import sounds from './sounds.js';
import Sound from './Sound';
import 'react-rangeslider/lib/index.css'
import React, {Component} from 'react';

class SoundsList extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.user", this.props.user);
        this.state = {
            sounds: sounds
        };

        this.handleChangeVolume = this.handleChangeVolume.bind(this);


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