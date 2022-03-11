import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal';

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

// class App extends React.Component {
//   state = {
//     text: 0,
//     persons: [
//       {id: 1, name: 'Mark'}
//     ]
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({count: this.state.count + 1})
//     }, 1000);
//   }

//   render() {
//     const {text, persons} = this.state;
//     console.log('Foo render', this.props.children)
//     return (<div>
//       <input type="text" value={text} onChange={this._change} />
//       <ul>
//         {persons.map()}
//       </ul>
//     </div>)
//   }
// }
// dom element가 다르면 다른 컴포넌트로 인식한다.
// className, style이 다르면 그 어트리뷰트만 변경된다.
// 같은 컴포넌트는 프롭스를 업데이트한다.

function App() {
  const [visible, setVisible] = useState(false)
  const open  = () => {
    setVisible(true);
  }

  const close = () => {
    setVisible(false);
  }
  return (
    <div>
      <button onClick={open}>open</button>
      {visible && <Modal><div style={
        {
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.5)'
        }
        
      } onClick={close}>
        Hello
        </div></Modal>}
    </div>
  )
}

export default App;
