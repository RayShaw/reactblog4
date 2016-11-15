import React, { Component, PropTypes } from 'react';
import OneBlog from '../OneBlog';

export default class BlogList extends Component {

  sortBlog(newBlogs) {
    newBlogs.sort(function (a, b) {
      return b.timeLong - a.timeLong;
    });
    return newBlogs;

  }
  render() {

    let blogs = this.props.blogs;
    blogs = this.sortBlog(blogs);

    return (
      <div className="col-md-8">
        {
          blogs.map((blog, index) =>
            <OneBlog {...blog} key={index}/>
          )
        }
      </div>
    );
  }
}

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeLong: PropTypes.number.isRequired,
  }).isRequired).isRequired
};
