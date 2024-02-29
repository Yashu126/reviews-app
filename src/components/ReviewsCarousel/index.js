import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onIndexInc = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (reviewsList.length - 1 > index) {
      this.setState(preval => ({index: preval.index + 1}))
    } else {
      this.setState(preval => ({index: preval.index}))
    }
  }

  onIndexDec = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(preval => ({index: preval.index - 1}))
    } else {
      this.setState(preval => ({index: preval.index}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const profile = reviewsList[index]
    const {imgUrl, username, companyName, description} = profile
    return (
      <div className="background-con">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} width="200" />
        <div className="btn-con">
          <button data-testid="leftArrow" onClick={this.onIndexDec} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              width="30"
              alt="left arrow"
            />
          </button>
          <p className="user-name">{username}</p>
          <button data-testid="rightArrow" onClick={this.onIndexInc} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              width="30"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
