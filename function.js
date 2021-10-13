import axios from 'axios';

 async function getUser(user_id){
    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)
    var array = {...user,...post};
    console.log(array);
}

export {getUser} ;