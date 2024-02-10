import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts, postsInfo} from "../store/postSlice/PostSlice";

const PostPage = () => {
    const {posts} =useSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, []);

    return (
        <div style={{display: 'flex', gap: 10,flexWrap: 'wrap'}}>
            {
                posts.map(item=> {
                    return (
                        <div style={{border: '1px solid #ececec',padding: 20}} key={item.id}>
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PostPage;