import React, { useState, useEffect } from 'react';
import './feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        return (
          <Post
            key={post.data.id}
            image={post.data.image}
            message={post.data.message}
            profilepic={post.data.profilepic}
            timestamp={post.data.timestamp}
            username={post.data.username}
          />
        );
      })}
    </div>
  );
}

export default Feed;
