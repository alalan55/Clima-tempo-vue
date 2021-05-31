import axios from 'axios'

let key = '5a9f01f2'
let url = `https://api.hgbrasil.com/weather?${key}&city_name=`

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
  


const  doRequest = async (e) =>{
    let {data} = await axios.get(`${url}${e}`, {headers: headers})
    return data;
}

export{
    doRequest
}