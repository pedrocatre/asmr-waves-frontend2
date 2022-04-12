import SoundList from "./soundlist";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import classNames from 'classnames';

class Home extends React.Component {

    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const [submitting, setSubmitting] = useState(false);
        const handleSubmit = event => {
            event.preventDefault();
            setSubmitting(true);

            setTimeout(() => {
                setSubmitting(false);
            }, 3000)
        }

        return (
            <div>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">ASMR Waves</h1>
                            <p className="lead text-muted">Mix different sounds and create your perfect environment for working, relaxing or sleeping</p>
                            {/*<p>*/}
                            {/*    <a href="#" className="btn btn-primary my-2">Main call to action</a>*/}
                            {/*    <a href="#" className="btn btn-secondary my-2">Secondary action</a>*/}
                            {/*</p>*/}
                            <Button outline color="primary" onClick={this.toggle}>Login</Button>

                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                                <ModalBody>

                                    <div className="wrapper">
                                        <h1>How About Them Apples</h1>
                                        {submitting &&
                                        <div>Submtting Form...</div>
                                        }
                                        <form onSubmit={handleSubmit}>
                                            <fieldset>
                                                <label>
                                                    <p>Name</p>
                                                    <input name="name" />
                                                </label>
                                            </fieldset>
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Login</Button>
                                </ModalFooter>
                            </Modal>

                        </div>
                    </div>
                </section>
                <SoundList></SoundList>
            </div>
        );
    }

}

export default Home;