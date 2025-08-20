import React, {useEffect, useState} from 'react'
import {fakeSocialMediaFetch} from '../PracticeSet6/api/fakeSocialMediaFetch'
const SocialMedia = () =>{
    const [allSocialMedia, setAllSocialMedia] = useState([]);
    useEffect(()=>{
        fakeSocialMediaFetch('https://example.com/api/posts')
            .then((res) =>{
                setAllSocialMedia(res.data.posts)
            })
            .catch((err) =>{
                console.message(err.message)
            })
    }, []);

    const handleBakery = () =>{
        const showBakery = allSocialMedia.filter((b) => b.category === 'Bakery');
        setAllSocialMedia(showBakery);
    }
    return (
        <React.Fragment>
            <h2>Social Media</h2>
            <div className="socialMediaPosts" style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
                {
                    allSocialMedia.map((s)=>(
                        <div className="socialMediaPost" style={{border:'1px solid green'}}>
                            <div className="socialMedia-image">
                                <img src={s.src} />
                                <p>{s.caption}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={handleBakery}>Show Bakery</button>
        </React.Fragment>
    )
}
export default SocialMedia;