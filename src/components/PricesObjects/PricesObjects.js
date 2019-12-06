import React, { Component } from 'react'

import PricesObjectsFilters from './PricesObjectsFilters/'
import PricesObjectsTable from './PricesObjectsTable/'

import './PricesObjects.scss'

class PricesObjects extends Component {
  render() {
    return(
      <div className="prices-objects">
        <PricesObjectsFilters 
          currentPriceObject={this.props.currentPriceObject} 
          clearCurrentPricesObject={this.props.clearCurrentPricesObject}
          />
        <PricesObjectsTable 
          updateObjectsFilters={this.props.updateObjectsFilters} 
          updateCurrentPricesObject={this.props.updateCurrentPricesObject} 
        />
      </div>
    )
  }
}

export default PricesObjects