import React, { Fragment } from 'react'
import classnames from 'classnames'
import { NavItem, NavLink } from 'reactstrap'

const Tab = ( {name, activeTab, toggle} ) => (
    <Fragment>
        <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1') }}
            >{name}
            </NavLink>
        </NavItem>
    </Fragment>
)

export default Tab
