import React from 'react'

const Variables = () => {

    const greet = 'Greetings from constant';
    const image = 'https://imagekit.io/blog/content/images/2020/06/cdn-blog-banner.jpg';

    return (
        <div>
            <h2>New Component { greet } </h2>
            <img src={image} alt=""/>
        </div>
    )
}

export default Variables
