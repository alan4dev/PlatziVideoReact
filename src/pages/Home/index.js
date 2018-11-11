import React, {Component} from 'react'
import {connect} from 'react-redux'
import {List as list} from 'immutable'
import {bindActionCreators} from 'redux'

import HomeLayout from './layout'
import Categories from '../../components/Categories'
import Related from '../../components/Related'
import RegularError from '../RegularError'
import Modal from '../../containers/Modal'
import ModalLayout from '../../components/Modal'
import VideoPlayer from '../../containers/VideoPlayer'

import * as actions from '../../actions'

class Home extends Component {
  handleOpenModal = (id) => {
    this.props.actions.openModal(id)
  }

  handleModalClose = () => {
    this.props.actions.closeModal()
  }

  render() {
    return(
      <RegularError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            search={this.props.search}
            handleOpenModal={this.handleOpenModal}
            isLoading={this.props.isLoading}
          />
          {
            this.props.modal.get('visibility') &&
            <Modal>
              <ModalLayout handleClick={this.handleModalClose}>
                <VideoPlayer
                  autoPlay
                  id={this.props.modal.get('songId')}
                />
              </ModalLayout>
            </Modal>
          }
        </HomeLayout>
      </RegularError>
    )
  }
}

function mapStateToProps(state, props) {
  const categories = state.getIn(['data', 'categories']).map(id => {
    // return state.data.entities.categories[id]
    return state.getIn(['data', 'entities', 'categories', id])
  })

  let searchResults = list()

  const search = state.getIn(['data', 'search'])

  if(search) {
    const songList = state.getIn(['data', 'entities', 'song'])

    searchResults = songList.filter(item => (
      item.get('author').toLowerCase().includes(search.toLowerCase()) || item.get('title').toLowerCase().includes(search.toLowerCase())
    )).toList()
  }

  return {
    categories,
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.getIn(['isLoading', 'active'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
