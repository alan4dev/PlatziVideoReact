import React, {Component} from 'react'

import HomeLayout from './layout'
import Categories from '../../components/Categories'
import Related from '../../components/Related'
import RegularError from '../RegularError'
import Modal from '../../containers/Modal'
import ModalLayout from '../../components/Modal'
import VideoPlayer from '../../containers/VideoPlayer'

class Home extends Component {
  state = {
    modalVisible: false
  }

  handleModalVisibility = song => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      song
    })
  }

  render() {
    return(
      <RegularError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.data.categories}
            handleOpenModal={this.handleModalVisibility}
          />
          {
            this.state.modalVisible &&
            <Modal>
              <ModalLayout handleClick={this.handleModalVisibility}>
                <VideoPlayer
                  autoPlay
                  src={this.state.song.src}
                  title={this.state.song.title}
                />
              </ModalLayout>
            </Modal>
          }
        </HomeLayout>
      </RegularError>
    )
  }
}

export default Home
