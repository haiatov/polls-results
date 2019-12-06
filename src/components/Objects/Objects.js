import React, { Component } from 'react'

import ObjectsTable from './ObjectsTable/'
import ObjectsFilters from './ObjectsFilters/'

class Objects extends Component {
  render() {
    return(
      <div className="prices-objects">
        <ObjectsFilters 
          filters={this.props.filters} 
        />
        <ObjectsTable 
          matchWithObjects={this.props.matchWithObjects}
          clearCurrentPricesObject={this.props.clearCurrentPricesObject}
          
        />
      </div>
    )
  }
}

export default Objects

//<PricesObjectsTable />