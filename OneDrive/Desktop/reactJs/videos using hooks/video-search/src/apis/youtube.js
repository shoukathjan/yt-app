import axios from 'axios';
import React from 'react';



const KEY = 'AIzaSyA3SkDMcMdli7-M5ZIfkJ5V9bnkzpJcOWQ';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    
    },
});
