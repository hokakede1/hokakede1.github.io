import React, {Component} from 'react'
import { delet, editPost } from '../actions'
import { connect } from 'react-redux'
import Comment from './comment'

class Individual extends Component {
  constructor(props){
    super(props)

    var copy = this.props.content;

    this.state = {
      like: false,
      copy: copy,
      times: '',
      comment:[],
      editinput: '',
      toggleComment: false,
      toggleEdit: false,
    }

    this.onEditChange = this.onEditChange.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onCommentEditSubmit = this.onCommentEditSubmit.bind(this);
    this.onToggleComment = this.onToggleComment.bind(this);
    this.onToggleEdit = this.onToggleEdit.bind(this);
  }

  onToggleComment(){
    this.setState({
      toggleComment: !this.state.toggleComment
    })
  }

  onToggleEdit(){
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }


  onCommentEditSubmit(index, value){
    console.log(value, index,'thisone')
    var newComment = this.state.comment.slice();
    newComment[index] = value

    this.setState({
      comment: newComment
    })
  }

  onEditChange(e){

    this.setState({
      copy: e.target.value
    })
  }


  onEditSubmit(){
    this.props.editPost(this.props.index, this.state.copy)
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  onLikeHandle(){
    this.setState({
      like: !this.state.like
    })
    !this.state.like ? this.setState({ times : '1'}) : this.setState({ times : ''})
  }

  onDel(){
    this.props.delet(this.props.index)
  }

  postComment(event){
    this.setState({
      comment: [...this.state.comment, event]
    })
  }

  deleteComment(index){
    this.setState({
      comment: this.state.comment.filter((item, i) => {return i !== index })
    })
  }



  render(){
    var displayNone = {
      display: 'none'
    }
    return(
      <div className='posts'>
        <div className='card'>
          <header className='card-header'>
            <p className='card-header-title'>
              Huy Dang
            </p>
          </header>
          <div className="card-content">
              <div className="content">

          <h1
            style={this.state.toggleEdit ? displayNone : null}
            className='title is-2'>{this.props.content}</h1>

          <input
                className='textarea'
                style={this.state.toggleEdit ? null : displayNone}
                value={this.state.copy}
                onChange={this.onEditChange}
            ></input>
              </div>
          </div>

          <button
            className='button is-primary theEditButton'
            style={this.state.toggleEdit ? null : displayNone}
            onClick={this.onEditSubmit}>EDIT</button>
          <footer className="card-footer">



            <a
                className='card-footer-item'
                onClick={this.onLikeHandle.bind(this)}>
                {`${this.state.times} Like`}
            </a>


            <a
              className='card-footer-item'
              onClick={this.onToggleEdit}>Edit</a>

            <a
              className='card-footer-item'
              onClick={this.onToggleComment}>{`${this.state.comment.length} Comment`}</a>

            <a
              className='card-footer-item'
              onClick={this.onDel.bind(this)}>Delete</a>


            </footer>

            </div>

            <Comment
              status={this.state.toggleComment}
              editComment={this.onCommentEditSubmit}
              deleteComment={this.deleteComment.bind(this)}
              mainComment={this.state.comment}
              changeComment={this.postComment.bind(this)}/>
        </div>
    )
  }
}

export default connect(null, {delet, editPost} )(Individual)
