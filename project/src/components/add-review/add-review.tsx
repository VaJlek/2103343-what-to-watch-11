import { useState, ChangeEvent } from 'react';
import { AddReviewType } from '../../types/types';

export default function AddReview (): JSX.Element{
  const [formData, setFormData] = useState<AddReviewType>({
    rating: 0,
    comment: '',
  });

  const [ratingValue, setRatingValue] = useState<number>(0);

  const handleRatingValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRatingValue(Number(evt.target.value));
    setFormData({...formData, rating: Number(evt.target.value)});
  };

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    if (evt.target.value) {
      setFormData({...formData, comment: evt.target.value});
    } else {
      setFormData({...formData, comment: ''});
    }
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleRatingValueChange} checked={ratingValue === 10}/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleRatingValueChange} checked={ratingValue === 9}/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={handleRatingValueChange} checked={ratingValue === 8}/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleRatingValueChange} checked={ratingValue === 7}/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleRatingValueChange} checked={ratingValue === 6}/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleRatingValueChange} checked={ratingValue === 5}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleRatingValueChange} checked={ratingValue === 4}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={handleRatingValueChange} checked={ratingValue === 3}/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleRatingValueChange} checked={ratingValue === 2}/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleRatingValueChange} checked={ratingValue === 1}/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text" >
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleTextChange} value={formData.comment}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}