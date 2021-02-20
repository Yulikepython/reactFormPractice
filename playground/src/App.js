import React, {Component} from "react"
import StepForm from "./StepForm"


class App extends Component {
  render() {
    return (
      <div>
        <h1>申込管理</h1>
        {/* propsでIDを渡して処理されるようにする */}
        <StepForm />
      </div>
    )
  }
}

export default App
