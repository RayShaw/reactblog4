import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { updateBlog, deleteBlog } from '../actions';

import { connect } from 'react-redux';

class BlogDetail extends Component {
    render() {

        let blogDetail = this.props.blogs.find(blog => blog.id == this.props.params.blogId);

        return <div className="col-md-8">
            <h1 className="page-header">Blog Detail</h1>
            <form ref="detailForm" className="well">
                <p>
                    <span className="glyphicon glyphicon-time"></span>
                    Posted on {new Date(blogDetail.timeLong).toLocaleDateString() + ' ' + new Date(blogDetail.timeLong).toLocaleTimeString()}
                    <button className="btn btn-danger pull-right" onClick={e => this.handleDelete(e)}>Delete <span className="glyphicon glyphicon-minus"></span></button>
                </p>
                <p><label>Blog Title :</label></p>
                <p><input ref="updateTitle" type="text" className="form-control" placeholder="Blog Title" defaultValue={blogDetail.title} /></p>
                <p><label>Blog Content :</label></p>
                <p><textarea ref="updateContent" className="form-control" rows="5" placeholder="Blog Content" defaultValue={blogDetail.content}></textarea></p>
                <p><button className="btn btn-warning" onClick={e => this.handelCancel(e)}>Back <span className="glyphicon glyphicon-minus"></span></button>
                    <button className="btn btn-success pull-right" onClick={e => this.handleUpdate(e)}>Update <span className="glyphicon glyphicon-plus"></span></button></p>
            </form>
        </div>
    }

    handelCancel(e) {
        e.preventDefault();
        browserHistory.push("/");
    }

    handleUpdate(e) {
        e.preventDefault();
        let blog = {
            id: this.props.params.blogId + '',
            title: this.refs.updateTitle.value,
            content: this.refs.updateContent.value,
            timeLong: new Date().getTime(),
        }

        // console.log(blog);
        const dispatch = this.props.dispatch;
        dispatch(updateBlog(blog));
        browserHistory.push('/');
        // this.props.onUpdateBlog(updateBlog);

        // blog => dispatch(addBlog(blog))



    }

    handleDelete(e) {
        e.preventDefault();

        if (window.confirm('Sure Delete this Blog??')) {

            //console.log(this.props.id);
            const dispatch = this.props.dispatch;
            dispatch(deleteBlog(this.props.params.blogId));
            // this.props.onDeleteBlog(this.props.id);
            browserHistory.push('/');
        }
    }


}

function select(state) {
    return {
        blogs: state.blogs
        // blog: state.blog,
    }
}

export default connect(select)(BlogDetail);
