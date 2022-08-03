
import React, { Component } from 'react'

export default class CollectionDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      multx2: 1
    }
  }

  handleadd = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handlesub = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handlemul = () => {
    this.setState({ multx2: this.state.multx2 * 2 })
  }

  render () {
    return (
      <div>
        <h2 className='text-white'> sumando y restando: {this.state.count}</h2>
        <h2 className='text-white'>multiplicando x2: {this.state.multx2}</h2>

<button className='bg-lime-300 m-5' onClick={this.handleadd}>ADD 1</button>
<button className='bg-lime-300 m-5' onClick={this.handlesub}>SUB 1</button>
<button className='bg-cyan-300 m-5' onClick={this.handlemul}>mul x2 </button>

      </div>

    )
  }
}
