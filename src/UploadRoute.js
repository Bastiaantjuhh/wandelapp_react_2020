import React, { Component } from 'react';
import { postTextFile } from './rest_routes';
class UploadRoute extends Component {
    constructor(props) {
            super(props);
            this.state = {
                selectedFile: null
            }
        }
        // zie https://www.js-tutorials.com/react-js/learn-react-file-upload-in-5-minute/
    onChangeHandler = (event) => {
        const file = event.target.files[0];
        this.setState({
            selectedFile: file
        });

    }

    fileUploadHandler = () => {
        const cuid = 'test';
        const remoteServer = 'https://wandelappbackend-v5.herokuapp.com';
        postTextFile(remoteServer + '/upload?cuid=' + cuid, this.state.selectedFile)
            .then(
                (e) => {
                    console.log('upload ok ' + e);
                    this.props.onUpdated(this.state.selectedFile.name);
                }
            )
            .catch(
                (e) => {
                    console.log('fout met upload ' + e);
                    this.props.onUpdated(this.state.selectedFile.name);
                }
            );
    };

    render() {
        return (
            <div id='box'>
        <input accept=".gpx" type = "file" onChange = { this.onChangeHandler } /><button  type = "button"  onClick = { this.fileUploadHandler }>Upload File</button>
            </div>
        );
    }
}

export default UploadRoute;