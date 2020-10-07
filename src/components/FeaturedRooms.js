import React, { Component } from 'react'
import {RoomContext} from '../context'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const {greeting, name}= this.context;
        // 1:50;
        return (
            <div>
                Hello from featured rooms {greeting}
            </div>
        )
    }
}
