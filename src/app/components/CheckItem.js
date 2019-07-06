import React from 'react';

export default class CheckItem extends React.Component {
    render() {
        return (
            <>
                <input id={this.props.value} onChange={this.props.changeHandler} type="checkbox" value={this.props.value} defaultChecked/>
                <label htmlFor={this.props.value}>{this.props.children}</label>
                <br/>
            </>
        );
    }
}