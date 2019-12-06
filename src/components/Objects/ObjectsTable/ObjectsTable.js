import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import './ObjectsTable.scss';


class ObjectsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridOptions: {
        columnDefs: [
          { headerName: "Id", field: "id", width: 70 },
          { headerName: "Название", field: "name", resizable: true,  filter: true, width: 900 },
          { headerName: "Коллекция", field: "collection", resizable: true,  filter: true, width: 250 },
          { headerName: "Производитель", field: "producer", resizable: true,  filter: true, width: 250 }
        ],     
        onCellDoubleClicked: this.handleClickTableCell,
        rowSelection: 'single'
      }
    }
  } 

  static getDerivedStateFromProps(props, state) {
    const objectsRows = props.objectsRows;
    return {...state, objectsRows}
  }


  render() {
    return(
      <div className="ag-theme-balham objects__table" >
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
    const {data} = event;
    this.props.matchWithObjects(data);
  }
}

const putStateToProps = (state, ownProps) => ({
  objectsRows: state.objects
})

export default connect(putStateToProps)(ObjectsTable)