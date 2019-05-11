import React, {Component} from "react";

export default class Book extends Component {
    render() {

        const info = this.props.volume.volumeInfo;

        return (
            <div>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
            </div>
        );
    }
}