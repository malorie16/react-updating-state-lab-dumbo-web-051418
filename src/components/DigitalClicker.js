import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    timesClicked: 0
  }

  handleClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return (
      <div>
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
