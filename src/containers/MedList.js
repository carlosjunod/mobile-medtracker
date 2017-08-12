import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  getMeds,
  addMed,
  editMed,
  delMed,
  setAlarm,
  openModal,
  closeModal,
  editModal,
} from '../core-modules/actions'

import App from '../components/App'

const mapStateToProps = (state) => {
  // console.log('STATEEEEEEEE', state.UI)
  let meds = state.meds
  let ui = state.UI
  return {
    meds, // current state of my app
    ui,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getMeds,
    addMed,
    editMed,
    delMed,
    setAlarm,
    openModal,
    closeModal,
    editModal,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
