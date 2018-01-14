import React from 'react';

export default class Bodycenter extends React.Component{

    render(){
        return (
            <div>
                body-center change age -> <input type="text" onChange={this.props.handleChangeBodyCenter}/>
            </div>
        );
    }
}