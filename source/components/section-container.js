import { connect } from 'react-redux'
import Section from './section.jsx'

const mapStateToProps = (state, props) => {
  return  state.app.sections.find((element) => element.id ===props.match.params.id)
  
}

const VisibleSection = connect(
  mapStateToProps
)(Section)

export default VisibleSection