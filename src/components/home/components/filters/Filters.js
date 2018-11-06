import React, { Fragment } from 'react'
import 'components/home/components/filters/filters.css'
import PropTypes from 'prop-types'


const Filters = ({categories}) => (
    <Fragment>
        <div className="filters-place">
            <div className="buttons-filters">
                {categories.map((category, index) => (
                    <div key={index}>{category}</div>
                ))}
            </div>
        </div>
    </Fragment>
)

Filters.defaultProps = {
    categories: []
}

Filters.PropTypes = {
    categories: PropTypes.array.isRequired
}

export default Filters
