import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './index.sass';

import { Layout } from 'antd';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: window.innerHeight
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        const windowHeight = window.innerHeight;
        console.log('Calendar height: ' + windowHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = (e) => {
        this.setState({ windowHeight: window.innerHeight })
    };


    render() {
        const margin = 48;
        const padding = 64;
        const windowHeight = this.state.windowHeight - margin - padding;
        return (
            <Layout style={{ minHeight: windowHeight, maxHeight: windowHeight }}>
                <FullCalendar height={'parent'} defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
            </Layout>
        );
    }
}

export default Calendar;
