import React, { useState } from 'react'

const Book = ({ book }) => {
  const [informationToggle, setInformationToggle] = useState(false)

  const {
    title,
    shortDescription,
    url,
    coverImageUrl,
    publisher,
    publicationDate,
    detailedDescription,
    author
  } = book

  return (
    <div className='standardView'>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <div>{shortDescription}</div>
      <img className='img' width='300' src={coverImageUrl} />
      <div>
        <button onClick={() => setInformationToggle(!informationToggle)}>
          {informationToggle ? 'Less' : 'More'} Information
        </button>
        {informationToggle && (
          <div>
            <a href={url}>{url}</a>
            <div>{publisher}</div>
            <div>{publicationDate}</div>
            <div>{detailedDescription}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Book
