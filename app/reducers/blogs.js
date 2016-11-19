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
            localStorage.setItem('data', JSON.stringify(updateBlogs));
            return updateBlogs;

        case DELETE_BLOG:
            let deleteBlogs = Object.assign([], state);
            deleteBlogs.map((blog, index) => {
                if (blog.id == action.index) {
                    deleteBlogs.splice(index, 1);
                }
            });

            localStorage.setItem('data', JSON.stringify(deleteBlogs));
            return deleteBlogs;

        default:
            return state;
    }
}