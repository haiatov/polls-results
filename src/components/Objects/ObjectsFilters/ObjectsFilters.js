import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ObjectsFilters.scss'
import { fetchObjects } from '../../../store/actions/objectsActions.js'

class ObjectsFilters extends Component {

  constructor() {
    super();
    this.state = {
      filters: {
        name: '',
        collection: '',
        producer: ''
      },
      prevProps: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props !== state.prevProps){
      return {
        ...state, 
        filters: props.filters,
        prevProps: props
      }
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className="objects__filters">
        <div className="objects__filters__title">
          Справочник Shop-Plitka: 
        </div>
        <div className="objects__filters__item">
          <label>Наименование: </label>
          <input type="text" value={this.state.filters.name} onChange={this.handleChangeInput} data-name="name" />
        </div>
        <div className="objects__filters__item">
          <label>Коллекция: </label>
          <input type="text" value={this.state.filters.collection} onChange={this.handleChangeInput} data-name="collection" />
        </div>
        <div className="objects__filters__item">
          <label>Производитель: </label>
          <input type="text" value={this.state.filters.producer} onChange={this.handleChangeInput} data-name="producer" />
        </div>
        
        <div className="objects__filters__button">
          <button onClick={this.handleClickFetchButton}>
            Загрузить
          </button>
        </div>

        <div className="objects__filters__item">
          * Сервер возвращает не более 3000 записей.
        </div>

      </div>
    )
  }

  handleChangeInput = (e) => {
    const fieldName = e.target.dataset.name;
    const fieldValue = e.target.value;
    this.setState((state, props) => {
      return {
        filters: {
          ...state.filters,
          [fieldName]: fieldValue
        }
      }
      
    })
  }

  handleClickFetchButton = () => {
    const name = this.state.filters.name.length > 1 ? this.state.filters.name : 0;
    const collection = this.state.filters.collection.length > 1 ? this.state.filters.collection : 0;
    const producer = this.state.filters.producer.length > 1 ? this.state.filters.producer : 0;
    this.props.fetchObjects(name, collection, producer);
   // }
  };
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {
  fetchObjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ObjectsFilters)