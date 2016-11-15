import React, { Component, PropTypes } from 'react';
import OneBlog from '../OneBlog';

export default class BlogList extends Component {
  render() {
    return (
      <div className="col-md-8">
        {
          this.props.blogs.map((blog, index) =>
            <OneBlog
              {...blog}
              key={index}
              />
              
          )
        }
      </div>
    );
  }
}

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeLong: PropTypes.number.isRequired,
  }).isRequired).isRequired
};
