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
    <div>
      <img width='100' align='right' src={coverImageUrl} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <div>{shortDescription}</div>
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
