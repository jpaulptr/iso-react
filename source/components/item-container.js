import { connect } from 'react-redux'
import Item from './item.jsx'

const mapStateToProps = (state, props) => 
  state.app.items.find((element) => element.id ===props.match.params.id)  

const VisibleItem = connect(
  mapStateToProps
)(Item)

export default VisibleItem