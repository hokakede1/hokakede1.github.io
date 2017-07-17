import React, {Component} from 'react'
import { connect } from 'react-redux'
import Individual from './individuals'
import ImgPosts from './imgPosts'
import axios from 'axios'
import Bbc from './news'

var apiKey = '42fb356a7c184d6c805b5b2ba3ce44aa'
class NewsFeed extends Component{
  constructor(props){
    super(props)

    this.state = {
      news: {
          articles: []
      }
    }
  }
  // Posting status

  componentDidMount(){
    axios.get(`https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=${apiKey}`)
    .then((response) => {
      this.setState({
        news: response.data
      })
      console.log(this.state.news, this.state.news.articles[0].description)

    })
  }


  render() {
  var post = this.props.post.map((item, i) => {
    return (<Individual key={i} content={item} index={i}/>)
  })

  //Upload img
  var img = this.props.imgPost.map((item, i) => {
    return (<ImgPosts key={i} imgurl={item} index={i}/>)
  })


  var news = this.state.news.articles.map((item, i) => {
    return (<Bbc key={i}
                thumbnail={item.urlToImage}
                link={item.url}
                header={item.description}
                author={item.author}/>)
  })


  return (
    <div>
      {post}
      {img}
      {news}
    </div>
  )
}
}

function mapStatetoProps(state){
  return {
    post: state.posts,
    imgPost: state.imgPost
  }
}

export default connect(mapStatetoProps)(NewsFeed)
