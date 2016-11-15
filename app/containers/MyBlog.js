import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addFormDisplay, moreFormDisplay, addBlog, updateBlog, deleteBlog } from '../actions';
import AddBlog from '../components/AddBlog';
import BlogList from '../components/BlogList';
import { Link } from 'react-router';

class MyBlog extends Component {
  render() {
    const { dispatch, formDisplayed, blogs } = this.props
    return <div>
      <h1 className="page-header">My Blog</h1>
      <AddBlog
        formDisplayed={formDisplayed}
        onToggleForm={() => dispatch(addFormDisplay())}
        onNewBlog={blog => dispatch(addBlog(blog))}
        />
      <BlogList
        blogs={this.props.blogs}
        />
        
    </div>
  }

};

MyBlog.propTypes = {
  formDisplayed: PropTypes.bool.isRequired,
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeLong: PropTypes.number.isRequired,
  }).isRequired).isRequired
};

function select(state) {
  return {
    formDisplayed: state.formDisplayed,
    blogs: state.blogs
  }
}

export default connect(select)(MyBlog);
