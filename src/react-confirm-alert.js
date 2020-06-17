import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
class Alert extends React.Component {
    submit = () => {
        confirmAlert({

            title: 'Help voor app',
            message:  "Voor het toevoegen van een route klik bladeren, kies uw route en klik op upload. " +
                "Voor het verwijderen van een route kijk onder de route die u wilt verwijderen en klik op verwijderen",
            buttons: [
                {
                    label: 'Sluiten'
                }
            ]
        });
    };

    render() {
        return (
            <div className='container'>
                <button id='alert' onClick={this.submit}>Help</button>
            </div>
        );
    }
}

export default Alert;