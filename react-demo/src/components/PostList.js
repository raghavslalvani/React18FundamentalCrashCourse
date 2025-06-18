import { useState,useEffect } from "react";
export const Postlist = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data=>setPosts(data))
        .catch(err => console.error('Error fetching posts:', err));
    }, []); // useEffect hook to fetch data when the component mounts

    return <div>
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    </div>
}