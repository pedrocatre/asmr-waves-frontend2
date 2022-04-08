import sounds from './sounds.js';
import Sound from './Sound';
import React, {Component} from 'react';

class SoundsList extends React.Component {

    constructor(props) {
        super(props);
        console.log("this.props.user", this.props.user);
        this.state = {
            sounds: sounds
        };


    }

    renderSounds() {
        return this.state.sounds.map((sound, index) => {
            return <Sound/>
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