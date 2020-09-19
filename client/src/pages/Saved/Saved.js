import React, { useState, useEffect } from 'react'
import API from '../../utils/API'

const Saved = () => {

    const [savedState, setSavedState] = useState({
        saved: [] 
    })

    savedState.handleDeleteSaved = id => {
        API.deleteMedia(id)
            .then(() => {
                let saved = savedState.saved.filter(media =< media._id === id 
                setSavedSt
                    )
            })
    }

    useEffect(() => {
        API.getSavedMedia()
            .then(({ data }) => {
                setSavedState({ ...savedState, save: data })
            })
    }, [])

  return (
    <>
    <h1>Your saved Movies/TV</h1>
    {
        savedState.saved.length > 0 ? (
            savedSate.savedmap(media => (
                <div key={media.imdbId}></div>


                <button onClick={() => savedState.handleDeleteSaved()}
            ))

        )
    }

    </>
  )
}

export default Saved
