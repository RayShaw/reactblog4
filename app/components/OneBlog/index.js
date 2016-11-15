import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

export default class OneBlog extends Component {

    // constructor(props) {
    //     super(props)
    //     this.handleDelete = this.handleDelete.bind(this)
    // }

    onOpenDetailForm() {
        browserHistory.push('/detail/' + this.props.id)
    }

    render() {
        const { title, content, timeLong } = this.props;
        return (
            <div>
                <h3>{title}:</h3>
                <p><span className="glyphicon glyphicon-time"></span> 
                    Posted on {new Date(timeLong).toLocaleDateString() + ' ' + new Date(timeLong).toLocaleTimeString()}
                </p>
                <h4>{content.length > 20 ? content.substring(0, 20) + ' ... ' : content}</h4>
                <p><a className="btn btn-primary" onClick={() => this.onOpenDetailForm()}>More<span className="glyphicon glyphicon-chevron-right"></span></a></p>
                <hr />
            </div>
        );
    }

}

OneBlog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeLong: PropTypes.number.isRequired
};
