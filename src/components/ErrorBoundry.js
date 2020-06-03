import React,{ Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

  compoentsDidCatch(error, info){
    this.setState({hasError: true})
  }
  rendr(){
    if(this.state.hasError){
      return <h1>Ooooops. This is not good </h1>
    }
    return this.props.children
  }
}
