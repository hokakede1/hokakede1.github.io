
//Initial States
var user = {
  name: 'Huy Dang',
  posts: [],
  imgPost: [],
  profilePic: 'https://s-media-cache-ak0.pinimg.com/736x/29/9e/56/299e56ab07c75af6407289ecc4ab1dd6--mothers-love-mother-daughters.jpg',
}

//Declare Action_type
var POST = 'POST';
var DELETE = 'DELETE';
var POST_IMAGE = 'POST_IMAGE';
var UPDATE_PRO = 'UPDATE_PRO';
var DELETE_IMG = 'DELETE_IMG'
var EDIT = 'EDIT';




export default function reducer(state=user, action) {
  console.log(state.imgPost)
  switch (action.type) {
    case POST:{

    return  {...state,
        posts: [...state.posts, action.payload]
      }
    }

    case DELETE:{

      return {...state,
        posts: state.posts.filter((e, i) => {return i !== action.payload} ),
      }
    }

    case DELETE_IMG:{

      return {...state,
        imgPost: state.imgPost.filter((e, i) => {return i !== action.payload} )
      }
    }

    case POST_IMAGE:{
      return {...state,
        imgPost: [...state.imgPost, action.payload]
      }
    }

    case EDIT:{
      var newarr = state.posts.slice();
      newarr[action.index] = action.payload;
      return {...state,
        posts: newarr
      }
    }

    case UPDATE_PRO:{
      return {...state,
        profilePic: action.payload
      }

    }

    default:
      return state;

  }
}
