import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comm, setComm] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        console.log(response)
        setPost(response.data)
    })
    const [fetchComments, isLoadingComm, errorComm] = useFetching(async () => {
        const response = await PostService.getCommById(params.id)
        setComm(response.data)
    })
    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <div style={{margin: " 0 auto"}}>
            <h1>You opened post with id = {params.id}</h1>
            <h1>{post.title}</h1>
            {
                isLoading
                    ? <Loader/>
                    : <div>{post.id}. {post.body}</div>
            }
            <h1>Comments</h1>
            {
                isLoadingComm
                    ? <Loader/>
                    : comm.map(comment => (
                        <div key={comm.email} className='commPool'>
                            <h4>{comment.email}</h4>
                            <p/>
                            <span>{comment.body}</span>

                        </div>
                    ))
            }
        </div>
    );
};

export default PostIdPage;