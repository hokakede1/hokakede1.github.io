import React, {Component} from 'react'
import Comment from './comment'

export default class Bbc extends Component {
  constructor(props){
    super(props)

    this.state = {
      like: false,
      times: '',
      comment: [],
      toggleComment: false,
      toggleEdit: false
    }

    this.onLikeHandle = this.onLikeHandle.bind(this)
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

  onLikeHandle(){
    this.setState({
      like: !this.state.like
    })
    !this.state.like ? this.setState({ times : '1'}) : this.setState({ times : ''})
  }

  render() {

    return (
      <div className='news'>
      <div className='card'>
        <div className='card-image'>
            <figure className="image is-4by3">
              <a href={this.props.link} target='_blank' >
                <img alt='Fail to Upload' src={this.props.thumbnail} /> </a>
            </figure>
            </div>

            <div className='card-content'>
              <div class="media-content">
                 <p class="title is-4">{this.props.author}</p>
              </div>

            <div className='content'>
              <a href={this.props.link} target='_blank'>{this.props.header}</a>
            </div>

        </div>

          <footer className='card-footer'>
            <a
              className='card-footer-item'
              onClick={this.onLikeHandle}>
              {`${this.state.times} Like`}</a>

            <a
              className='card-footer-item'
              onClick={this.onToggleComment}>
              {`${this.state.comment.length} Comment`}</a>
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
