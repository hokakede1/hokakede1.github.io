import React, {Component} from 'react'
import {connect} from 'react-redux'
import Individual from './individuals'
import ImgPosts from './imgPosts'
import {changePro} from '../actions'
import SearchBar from './searchBar'

function mapStatetoProps(state){
  return {
    username: state.name,
    userpicture: state.profilePic,
    post: state.posts,
    imgPost: state.imgPost
  }
}



class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: '',
      display: false
    }
    this.onChangeAvatar = this.onChangeAvatar.bind(this)
    this.onSubmitImg = this.onSubmitImg.bind(this)
    this.onToggleinput = this.onToggleinput.bind(this)
  }

  onToggleinput(){
    this.setState({
      display: !this.state.display
    })
  }

  onChangeAvatar(e){
    this.setState({
      input: e.target.value
    })
  }

  onSubmitImg(){
    if(!this.state.input) {
      return alert('Please enter an url')
    }
    this.props.changePro(this.state.input)
  }

  render () {
    var post = this.props.post.map((item, i) => {
      return (<Individual key={i} content={item} index={i}/>)
    })

    //Upload img
    var img = this.props.imgPost.map((item, i) => {
      return (<ImgPosts key={i} imgurl={item} index={i}/>)
    })

    var displayNone = {
      display: 'none'
    }

  return(
    <div className='profileBody'>
      <SearchBar />
      <header className='banner'>
        <div className='avatar'>
          <img src={this.props.userpicture} alt='profilePic' />
          <h1 className='title is-3'>Huy Dang</h1>
        </div>
      </header>

      <section className='changePro'>
        <div className='changeProContent'>
          <button
            className = 'button'
            onClick={this.onToggleinput}>Change profile picture</button>
          <input
                style={this.state.display ? null : displayNone}
                className='input'
                value={this.state.input}
                 onChange={this.onChangeAvatar}
                 ></input>
          <button
            style={this.state.display ? null : displayNone}
            className = 'button is-primary'
            onClick={this.onSubmitImg}>UPDATE</button>
        </div>

      </section>

      <div>
        {post}
        {img}
      </div>

    </div>
  )
}

}

export default connect(mapStatetoProps, {changePro})(Profile)
