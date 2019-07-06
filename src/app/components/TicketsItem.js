import React from 'react';

export default class TicketsItem extends React.Component {
    render() {
        return (
            <div>
                Вылет из: {this.props.origin}, {this.props.origin_name} [{this.props.departure_date}, {this.props.departure_time}]
                <br/>
                Место назначения: {this.props.destination}, {this.props.destination_name} [{this.props.arrival_date}, {this.props.arrival_time}]
                <br/>
                Пересадок: {this.props.stops}
                <br/>
                <span style={{ fontWeight: "bold" }}>Цена: {this.props.price}</span>
            </div>
        );
    }
}