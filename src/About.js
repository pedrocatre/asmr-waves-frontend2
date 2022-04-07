import React, {Component} from 'react';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (

            <React.Fragment>


                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">About</h1>
                        {/*<p className="lead text-muted">Mix different sounds and create your perfect environment for*/}
                        {/*working, relaxing or sleeping</p>*/}
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <p>ASMR Sounds is an ASMR white noise sound board for focus and relaxing. <br/>
                            You can mix different sounds and create your perfect environment for working, relaxing or
                            sleeping.</p>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default About;
