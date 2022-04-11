import SoundList from "./soundlist";
import classNames from "classnames";
import React from "react";

export default function About() {
    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">About</h1>

                    </div>
                </div>
            </section>
            <div className="album py-5 bg-light">

                <div className="container">
                    <p>ASMR Sounds is an ASMR white noise sound board for focus and relaxing. <br/>You can mix different sounds and create your perfect environment for working, relaxing or sleeping.</p>
                </div>


            </div>
        </div>
    );
}