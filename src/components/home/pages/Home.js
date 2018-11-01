import React, { Component, Fragment } from 'react'
import { TabContent, TabPane, Nav } from 'reactstrap'
import Tab from 'utils/Tab'

class Home extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            activeTab: '',
            nameReact: 'React',
            nameRedux: 'Redux',
            nameUdacity: 'Udacity'
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }
    render() {
        const { activeTab, nameReact, nameRedux, nameUdacity } = this.state
        return (
            <Fragment>
                <Nav>
                    <Tab name={nameReact} activeTab={activeTab} toggle={this.toggle}/>
                    <Tab name={nameRedux} activeTab={activeTab} toggle={this.toggle}/>
                    <Tab name={nameUdacity} activeTab={activeTab} toggle={this.toggle}/>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                    </TabPane>
                    <TabPane tabId="2">
                    </TabPane>
                    <TabPane tabId="3">
                    </TabPane>
                </TabContent>
            </Fragment>
        )
    }
}

export default Home
