import createDataContext from './createDataContext';
import axios from 'axios';

const api_urlMeteo = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const api_key='1ae0e05d29e5676b5e6ae70a74f6fef2';

const blogReducer= (state,action) => {
    switch(action.type){
        case 'get_blogposts':
            return action.payload;    
        default:
            return state;

    }
};

const getblogPost = dispatch =>{
        return (city) => {
             axios.get(`${api_urlMeteo}${city}&units=metric&lang=ar&APPID=${api_key}`)
            .then((response) => {
                dispatch({type:'get_blogposts',payload:response.data});
                })
            .catch((error)=>{
                console.log(error);
            })
    
        }  
  
};



export const {Context,Provider} = createDataContext(
    blogReducer,
    { getblogPost },
    []

);



