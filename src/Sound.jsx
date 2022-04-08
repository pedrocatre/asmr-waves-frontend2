import React, {Component} from 'react';
import Slider from 'react-rangeslider'
import classNames from 'classnames';

class Sound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            volume: this.props.sound.volume
        }
    }

    handleChange = volume => {
        this.setState({
            volume: volume
        });
        this.props.handleChangeVolume(this.props.index, volume);
        // this.props.sound.sound.volume(value/100.0);
        // this.props.sound.volume = value;
    };

    render() {
        let isSoundPlayingClass = classNames({
            "col": true,
            sound: true,
            'sound-not-active': !this.props.sound.isPlaying,
        });
        return (
            <div className={isSoundPlayingClass}>
                <div className="card shadow-sm">
                    {/*<svg className="bd-placeholder-img card-img-top" width="100%" height="225"*/}
                    {/*     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"*/}
                    {/*     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>*/}
                    {/*    <rect width="100%" height="100%" fill="#55595c"></rect>*/}
                    {/*    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>*/}
                    {/*</svg>*/}

                    <img className="card-img-top" src={this.props.sound.img} alt="Card image cap" onClick={this.props.onClick}/>

                    <div className="card-body">
                        <p className="sound-title card-text" onClick={this.props.onClick}>{this.props.sound.title}</p>

                        <div className="volume-slider-container">
                            <Slider
                                min={0}
                                max={100}
                                tooltip={false}
                                value={this.props.sound.volume}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Sound;