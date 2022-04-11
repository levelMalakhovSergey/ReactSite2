import axios from "axios";

export default class PostService 
{
    static async getAllData(  )
    {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts',);
        console.log(response.data)
        return response.data
    }
   static async getAll( limit = 10, page = 1)
   {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit: limit, _page:page
            }
        })

        return response.data
   }
    static async getById( id)
    {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
        return response
    }
    static async getCommById( id)
    {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments` )

        return response
    }
}