import React, {Component} from 'react'
import { connect } from 'react-redux'
function mapStatetoProps(state){
  return{
    avatar: state.profilePic
  }
}

class CommentContent extends Component {
  constructor(props){
    super(props)

    this.state={
      like: false,
      times: '',
      editinput: this.props.allcomment,
      toggleEdit: false,
    }

    this.onEditChange = this.onEditChange.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
    this.onToggleEdit = this.onToggleEdit.bind(this)
  }

  onToggleEdit(){
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  onEditSubmit(){
    this.props.editComment(this.props.index, this.state.editinput);
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }


  onEditChange(e){
    this.setState({
      editinput: e.target.value
    })
  }

  onLikeHandle(){
    this.setState({
      like: !this.state.like
    })
    !this.state.like ? this.setState({ times : '1'}) : this.setState({ times : ''})
  }

  onDeleteComment(){
    this.props.deleteComment(this.props.index)
  }


  render() {

    var displayNone = {
      display: 'none'
    }

    return (
      <div className='box commentContent'>
        <article className='media'>
          <div className="media-left">
            <figure className="image is-64x64">
            <img src={this.props.avatar} alt="Image" />
            </figure>
          </div>

          <div className='media-content'>
            <div className='content'>

              <p style={this.state.toggleEdit ? displayNone : null}
                > {this.props.allcomment} </p>

              <input
                    className='textarea'
                    style={this.state.toggleEdit ? null : displayNone}
                     value={this.state.editinput}
                     onChange={this.onEditChange}
                ></input>
                <button
                  className='button is-primary theEditButton'
                  style={this.state.toggleEdit ? null : displayNone}
                  onClick={this.onEditSubmit}>Edit</button>
                <br />


              <nav class="level is-mobile">
                <div className='level-left'>
                  <button
                    className='level-item button'
                    onClick={this.onLikeHandle.bind(this)}>
                    {`${this.state.times} Like`}</button>

                  <button
                    className='level-item button'
                    onClick={this.onToggleEdit}>Edit</button>
                </div>
              </nav>
            </div>
          </div>
          <div className='media-right'>
            <button
              className='delete'
              onClick={this.onDeleteComment.bind(this)}></button>
          </div>
        </article>
      </div>
    )
  }

}

export default connect(mapStatetoProps)(CommentContent)
