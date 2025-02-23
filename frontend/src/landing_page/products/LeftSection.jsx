import React from 'react'

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
       <div className="row">
        <div className="col-5">
          <img src={imageURL}/>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h1 className='text-muted pt-5'>{productName}</h1>
          <p className='me-5 pt-3'>{productDescription}</p>
          <div className='pt-3'>
            <a href={tryDemo} className='me-5'>Try demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className='pt-4'>
            <img src='media/images/googlePlayBadge.svg'/>
            <img src='media/images/appstoreBadge.svg' className='p-4'/>
          </div>
        </div>
       </div>
    </div>
  )
}

export default LeftSection
