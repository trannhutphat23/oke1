import MarkDown from 'markdown-to-jsx'
import React from 'react';
import { useEffect, useState } from 'react';

const Post = ({fileName}) => {
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./${fileName}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
            })
            .catch(err => console.log(err))
    }, [fileName])
    return (
        <div className='wrapper'>
            <MarkDown>
                {post}
            </MarkDown>
        </div>
    )
}

export default Post;