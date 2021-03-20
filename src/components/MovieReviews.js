// import React from 'react'

// export default function MovieReviews(props){

//   const renderReviews = (reviews) => {
//     return reviews.map( (reviewObj) => {
//       return(
//       <div className='reviews'>
//         <h3>{reviewObj.display_title}</h3>
//         Summary: {reviewObj.summary_short}
//       </div>
//       )
//     })
//   }

//   return(
//     <div className='review-list'>
//       {renderReviews(props.reviews)}
//     </div>
//   )
// }

// MovieReviews.defaultProps = {
//   reviews: []
// };




import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;