import React, { Component } from 'react'
import { connect } from 'react-redux'

import './PricesObjectsFilters.scss'
import { fetchPricesObjects } from '../../../store/actions/pricesObjectsActions.js'

class PricesObjectsFilters extends Component {
  constructor() {
    super();
    this.state = {
      providerId: 0
    }
  }


  render() {
    const {providers} = this.props;
    const providersOptions = providers.map(item => <option value={item.id} key={item.id}>{item.name}</option>);

    return(
      <div className="prices-objects__filters">
        <div className="prices-objects__filters__title">
          Справочник поставщиков: 
        </div>
        <div className="prices-objects__filters__item">
          <label>Статус: </label>
          <select>
            <option value="0">Несопоставленные</option>
          </select>
        </div>
        <div className="prices-objects__filters__item">
          <label>Поставщик: </label>
          <select onChange={this.handleChangeProviderSelect} >
            <option key={0}>Выберите поставщика</option>
            {providersOptions}
          </select>
        </div>
        <div className="prices-objects__filters__button">
          <button onClick={this.handleClickFetchButton}>
            Загрузить
          </button>
        </div>

        { this.props.currentPriceObject.id ? `Выбрано: ${this.props.currentPriceObject.name}` : ''}

      </div>
    )
  }
  
  handleClickFetchButton = () => {
    if(this.state.providerId) {
      this.props.fetchPricesObjects(0, this.state.providerId);
      this.props.clearCurrentPricesObject();
    }
  };
  
  handleChangeProviderSelect = (e) => {
    this.setState({
      providerId: e.target.value
    })
  };
}

const mapStateToProps = (state, ownProps) => ({
  providers: state.providers
})

const mapDispatchToProps = {
  fetchPricesObjects
}

export default connect(mapStateToProps, mapDispatchToProps)(PricesObjectsFilters)