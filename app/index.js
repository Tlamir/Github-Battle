import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Yigit!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)