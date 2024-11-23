import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Posts = () => {
    const {userId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchPostsById(userId);
            setPosts(data);
        }
        getData()
    }, [userId]);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => 
            <li key={post.id}>
                {post.title}
            </li>
        )}
      </ul>
    </div>
  )
}

export default Posts
