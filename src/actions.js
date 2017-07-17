export function postNewsFeed(content){
  return {
    type: 'POST',
    payload: content
  }
}

export function delet(index){
  return {
    type: 'DELETE',
    payload: index
  }
}


export function deletImg(index){
  return {
    type: 'DELETE_IMG',
    payload: index
  }
}

export function editPost(index, value){
  console.log('index',index)
  console.log('value',value)
  return {
    type: 'EDIT',
    index: index,
    payload: value
  }
}


export function postImg(content){
  return {
      type: 'POST_IMAGE',
      payload: content
  }
}

export function changePro(text){
  return {
    type: 'UPDATE_PRO',
    payload: text
  }
}
