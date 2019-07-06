import React from 'react';

import CheckItem from './components/CheckItem';
import TicketsItem from './components/TicketsItem';
import tickets from '../../tickets';

export default class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ticks: tickets.tickets.sort((a, b) => a.price - b.price),
            bools: {
                none: true,
                one: true,
                two: true,
                three: true
            }
        }
    }

    ticketsFilter(value) {
        let ticks = tickets.tickets.sort((a, b) => a.price - b.price)
        let bools = this.state.bools
        bools[value] = !bools[value]

        if (!bools.none) ticks = ticks.filter(tick => tick.stops !== 0)
        if (!bools.one) ticks = ticks.filter(tick => tick.stops !== 1)
        if (!bools.two) ticks = ticks.filter(tick => tick.stops !== 2)
        if (!bools.three) ticks = ticks.filter(tick => tick.stops !== 3)

        this.setState({
            ticks,
            bools
        })
    }

    render() {
        const checkInfo = [
            {title: 'Без пересадок', value: 'none'},
            {title: '1 пересадка', value: 'one'},
            {title: '2 пересадки', value: 'two'},
            {title: '3 пересадки', value: 'three'}
        ]

        let checkItems = checkInfo.map((item, index) => {
            return <CheckItem
                key={index}
                changeHandler={this.ticketsFilter.bind(this, item.value)}
                value={item.value}
            >
            {item.title}
            </CheckItem>
        })

        let ticketsItems = this.state.ticks.map((item, index) => <TicketsItem key={index} {...item}/>)

        return (
        <>
            <div className="tickets-filter">
                {checkItems}
            </div>
            <div className="tickets-list">
                {ticketsItems}
            </div>
        </>
        );
    }
}