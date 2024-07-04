// import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
// import { config } from "@fortawesome/fontawesome-svg-core";

import sounds from './sounds.js';
import Sound from './Sound';
import 'react-rangeslider/lib/index.css'
import './SoundsList.css';
import React, {Component} from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function MutedIcon(props) {
    return (
        <span className="fa-layers fa-fw fa-2x">
            <FontAwesomeIcon style={{color: '#dcdcdc'}} icon={faVolumeUp} />
            <FontAwesomeIcon style={{color: '#2c303b'}} icon={faXmark} inverse transform="shrink-6" />
            {/*<i style={{color: '#dcdcdc'}} className={'fas fa-volume-up'}></i>*/}
            {/*<i style={{color: '#2c303b'}} className="fa-inverse fas fa-times" data-fa-transform="shrink-6"></i>*/}
        </span>
    );
}

function NonMutedIcon(props) {
    return (
        <span className="fa-layers fa-fw fa-2x">
            <FontAwesomeIcon style={{color: '#dcdcdc'}} icon={faVolumeUp} />
            {/*<i style={{color: '#dcdcdc'}} className={'fas fa-volume-up'}></i>*/}
            {/*<i style={{color: 'transparent'}} className="fa-inverse fas fa-times" data-fa-transform="shrink-6"></i>*/}
        </span>
    );
}

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

    mute() {
        console.log("mute");
        const sounds = this.state.sounds.slice();
        const isMuted = !this.state.isMuted;
        if (isMuted) {
            sounds.forEach(sound => {
                if (sound.isPlaying) {
                    sound.sound.pause();
                }
            });
        } else {
            sounds.forEach(sound => {
                if (sound.isPlaying) {
                    sound.sound.play('main');
                }
            });
        }

        this.setState({isMuted: isMuted, sounds: sounds});
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
        const isMuted = this.state.isMuted;

        return (
            <div className="album py-5 bg-light">

                <div className="container">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
{/*                                 <button type="button" className="btn btn-sm btn-outline-secondary">Share</button> */}
{/*                                 <button type="button" className="btn btn-sm btn-outline-secondary">Export</button> */}
                            </div>
                            <div onClick={() => this.mute()}>
                                <button className={classNames('btn','btn-link','icon', {'d-none': !this.state.isMuted})}>
                                    <MutedIcon isMuted={isMuted}/>
                                </button>
                                <button className={classNames('btn','btn-link','icon', {'d-none': this.state.isMuted})}>
                                    <NonMutedIcon isMuted={isMuted}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">



                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {this.renderSounds()}
                    </div>
                </div>
            </div>
        );
    }

}

export default SoundsList;