import { ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../actions'

export default function blogs(state = [], action) {
    switch (action.type) {

        case ADD_BLOG:
            let newBlogs = [
                    ...state,
                    {
                        id: action.blog.id,
                        title: action.blog.title,
                        content: action.blog.content,
                        time: action.blog.time,
                        timeLong: action.blog.timeLong,
                        moreFormDisplay: false
                    }
                ]
            localStorage.setItem('data', JSON.stringify(newBlogs));
            return newBlogs;

        case UPDATE_BLOG:
            // console.log(action.blog);
            let updateBlogs = state.map((blog, index) => {
                    if (blog.id == action.blog.id) {
                        return Object.assign({}, blog, {
                            id: action.blog.id,
                            title: action.blog.title,
                            content: action.blog.content,
                            time: action.blog.time,
                            timeLong: action.blog.timeLong,
                            moreFormDisplay: false
                        })
                    }
                    return blog;
                })
            // console.log(updateState);
            localStorage.setItem('data', JSON.stringify(updateBlogs));
            return updateBlogs;

        case DELETE_BLOG:
            // console.log(action.index)
            let deleteBlog = Object.assign([], state);
            deleteBlog.map((blog, index) => {
                if (blog.id == action.index) {
                    deleteBlog.splice(index, 1);
                }
            });

            localStorage.setItem('data', JSON.stringify(deleteBlog));

            return Object.assign({}, state, {
                blogs: blogArr
            });

        default:
            return state;
    }
}