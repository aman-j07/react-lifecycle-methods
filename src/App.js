import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       theme:'dark',
       child:false,
    }
  }

  // static getDerivedStateFromProps(props,state){
  //   return {theme:'light'}
  // }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({theme:'dark'})
    },5000)
  }

  // shouldComponentUpdate(){
  //   return false;
  // }

  getSnapshotBeforeUpdate(previousProps,previousState){
    console.log('getSnapshotBeforeUpdate ',previousState)
    return null;
  }

  componentDidUpdate(){
    console.log('componentDidUpdate ',this.state)
  }

  toggleTheme=()=>{
    this.state.theme==='dark'?
    this.setState({
      theme:'light'
    }):this.setState({
      theme:'dark'
    })
  }

  render() {
    return (
      <div className={`App ${this.state.theme}`}>
        <h1 className='head'>LifeCycle Methods</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deserunt provident? Explicabo eaque iusto facere dolor laudantium accusamus ex corrupti impedit, eum fugiat quasi voluptas amet modi possimus, rem suscipit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deserunt provident? Explicabo eaque iusto facere dolor laudantium accusamus ex corrupti impedit, eum fugiat quasi voluptas amet modi possimus, rem suscipit?</p>
        <button className={`btn btn--${this.state.theme}`} onClick={this.toggleTheme}>Toggle Theme</button>
        <button className={`btn btn--${this.state.theme}`} onClick={()=>{this.setState({child:(!this.state.child)})}}>Toggle Child</button>
        {this.state.child?<Child/>:''}
      </div>
    )
  }
}

export class Child extends Component {
  componentWillUnmount(){
    alert('Child Paragraph is going to be unmounted')
  }
  render() {
    return (
      <p>Child Paragraph</p>
    )
  }
}

export default App
