import logo from './logo.svg';
import './App.css';
import React from 'react';

class Foo extends React.Component {
  componentDidMount() {
    console.log('Foo componentDidMount');
  }

  componentWillUnmount() {
    console.log('Foo componentWillUnmount');
    
  }

  static getDrivedStateFromProps(nextProps, prevProps) {
    console.log('Foo', nextProps, prevProps)
    return {}
  }

  render() {
    return <p>foo</p>
  }
}

class App extends React.Component {
  state = {
    text: 0,
    persons: [
      {id: 1, name: 'Mark'}
    ]
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000);
  }

  render() {
    const {text, persons} = this.state;
    console.log('Foo render', this.props.children)
    return (<div>
      <input type="text" value={text} onChange={this._change} />
      <ul>
        {persons.map()}
      </ul>
    </div>)
  }
}
// dom element가 다르면 다른 컴포넌트로 인식한다.
// className, style이 다르면 그 어트리뷰트만 변경된다.
// 같은 컴포넌트는 프롭스를 업데이트한다.

export default App;
