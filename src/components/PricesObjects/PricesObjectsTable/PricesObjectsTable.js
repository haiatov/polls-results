import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import './PricesObjectsTable.scss';


class PricesObjectsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridOptions: {
        columnDefs: [
          { headerName: "Id", field: "id", width: 70 },
          { headerName: "Название", field: "name", resizable: true, filter: true, width: 900 },
          { headerName: "Коллекция", field: "collection", resizable: true, filter: true, width: 250 },
          { headerName: "Производитель", field: "producer", resizable: true, filter: true, width: 250 }
        ],
        onCellDoubleClicked: this.handleClickTableCell,
        rowSelection: 'single',
        onSelectionChanged: this.handleSelectedRow
      }
    }
  } 

  static getDerivedStateFromProps(props, state) {
    const objectsRows = props.objectsRows;
    return {...state, objectsRows}
  }


  render() {
    return(
      <div className="ag-theme-balham prices-objects__table" >
        <AgGridReact
            modules={AllCommunityModules} 
            gridOptions={this.state.gridOptions}
            rowData={this.state.objectsRows}
        >
        </AgGridReact>
      </div>
    )
  }

  handleClickTableCell = event => {
    const {column, data} = event;
    if(column.colId === 'producer') {
      this.props.updateObjectsFilters({
        name: '',
        collection: '',
        producer: data[column.colId]
      });
    }
  }

  handleSelectedRow = event => {
    const {data} = event;
    var selectedRows = this.state.gridOptions.api.getSelectedRows();
    this.props.updateCurrentPricesObject(selectedRows);
  }
}

const putStateToProps = (state, ownProps) => ({
  objectsRows: state.pricesObjects
})

export default connect(putStateToProps)(PricesObjectsTable)