import axios from "axios";
import React, {useEffect, useMemo, useRef, useState} from "react";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostService from "../API/PostService";
import PostItem from "../components/PostItem";
import MyModal from "../components/UI/MyModal/MyModal";
import pages, {getPagesArray, GetPagesCount} from "../utils/pages";
import {TransitionGroup} from "react-transition-group";
import {useFetching} from "../components/hooks/useFetching";
import PostForm from "../components/PostForm";
import Loader from "../components/UI/loader/Loader"

// import { TransitionGroup } from "react-transition-group";
// import PostService from "./API/PostService";
// import { useFetching } from "./components/hooks/useFetching";
// import PostFilter from "./components/PostFilter";
// import PostForm from "./components/PostForm";
// import PostItem from "./components/PostItem";
// import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
// import Loader from "./components/UI/loader/Loader";
// import MyModal from "./components/UI/MyModal/MyModal";
// import MySelect from "./components/UI/select/MySelect";
// import pages, { getPagesArray, GetPagesCount } from "./utils/pages";
import "../styles/App.css";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false);
    const [isPostsLoading, setPostsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    let pagesArray = getPagesArray(totalPages)
    const lastElement = useRef();
    const observer = useRef();
    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        setPostsLoading(true)
        let response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        setTotalCou nt(response.headers['x-total-count'])
        setTotalPages(GetPagesCount(totalCount, limit))
        setPostsLoading(false)
    })


    // const SortedPosts = getSortedPosts();
    const SortedPosts = useMemo(() => {
        console.log("function worked");
        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        } else {
            return posts;
        }
    }, [filter.sort, posts]);
    const sortedAndSearchedPosts = useMemo(() => {
        return SortedPosts.filter((post) =>
            post.title.toLowerCase().includes(filter.query.toLowerCase())
        );
    }, [filter.query, SortedPosts]);
    useEffect(() => {
        if(isPostsLoading) return;
        if(observer.current) observer.current.disconnect();

        let callback = function(entries, observer) {
            if (entries[0].isIntersecting && page< 10) {
                console.log(entries)

                setPage(page+1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isLoading,isPostsLoading])

    useEffect(() => {
        fetchPosts()
    }, [page])



    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="Posts">
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                Add Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>

                <PostForm create={createPost}/>{" "}
            </MyModal>

            <hr style={{margin: "15px"}}></hr>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                postError &&
                <h1>Произошла ошибка</h1>
            }

            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Post List"
            />
            {
                isPostsLoading &&
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: "30px"}}>
                    <Loader/>
                </div>
            }
            <div ref={lastElement} style={{height: "20px", background: 'red', width: "800px"}}></div>



            {
                pagesArray.map(p =>
                        <MyButton
                            onClick={() => setPage(p)}
                            key={p}
                            style={page === p ? {
                                margin: "10px",
                                border: "2px solid yellow"
                            } : {margin: "10px"}}>{p}</MyButton>
                )}
        </div>
    );
}

export default Posts;
