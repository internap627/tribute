import React, {useEffect, useState} from 'react'
import db from './config/fbConfig'
import './Comments.css'

export default function Comments() {
    const SpeechRecognition = window.SpeechRecognition ||                     window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments()
    }, [])

    const fetchComments = () => {
        db.collection('comments').get().then(snapshot => {
        const dbComments =    snapshot.docs.map(item => item.data())
        setComments([...dbComments])
        })
    }
    
    const postComment = (comment) => {
        let doc = {
            title: comment
        }
        db.collection('comments').add(doc).then(doc => {
            window.M.toast({html: `${comment}`})
        })
    }

    const handleClick = () => {
        recognition.start()
        recognition.onresult = (e) => {
            const current = e.resultIndex
            const transcript = e.results[current][0].transcript
            const upperCase = transcript.charAt(0).toUpperCase() + transcript.substring(1);
            postComment(upperCase)
            fetchComments()
        }
        
    
    }
    console.log(comments)

    return (
        <div className='comments'>
            <h1>Comment Section</h1>
            <button onClick={handleClick }>Click to speak</button>
            <div className='comment-block'>
                {comments? 
                comments.map((comment) => <div key={comment.title} className='blockquote'> <p>{comment.title}</p> </div> 
                    
                ) : null}
            </div>
        </div>
    )
}
