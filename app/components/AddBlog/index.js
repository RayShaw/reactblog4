import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class AddBlog extends Component {

    render() {
        const stylesObj = {
            display: this.props.formDisplayed ? 'block' : 'none'
        };
        return <div className="col-md-8">
            <p><a className="btn btn-success" onClick={this.props.onToggleForm}>Add Blog <span className="glyphicon glyphicon-pencil"></span></a></p>
            <form ref="addBlogForm" style={stylesObj} onSubmit={e => this.handleForm(e)}>
                <div className="form-group">
                    <input ref="blogTitle" type="text" className="form-control" placeholder="New Blog Title" />
                </div>
                <p> <textarea ref="blogContent" className="form-control" rows="5" placeholder="New Blog Content"></textarea></p>
                <a className="btn btn-warning" onClick={this.props.onToggleForm}>Cancel <span className="glyphicon glyphicon-minus"></span></a>
                <button className="btn btn-success pull-right">Submit <span className="glyphicon glyphicon-plus"></span></button>

            </form>
        </div>
    }

    handleForm(e) {
        e.preventDefault();
        let newBlog = {
            id: new Date().getTime(),
            title: this.refs.blogTitle.value.trim(),
            content: this.refs.blogContent.value.trim(),
            timeLong: new Date().getTime(),
        };

        this.refs.addBlogForm.reset();
        this.props.onToggleForm();
        // console.log(newBlog);
        this.props.onNewBlog(newBlog);
    }

};

AddBlog.PropTypes = {
    formDisplayed: PropTypes.bool.isRequired,
    onToggleForm: PropTypes.func.isRequired,
    onNewBlog: PropTypes.func.isRequired

}