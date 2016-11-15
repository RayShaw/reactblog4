import { TOGGLE_ADD, TOGGLE_MORE, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../actions'

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case TOGGLE_ADD:
            return Object.assign({}, state, { formDisplayed: !state.formDisplayed });

        case TOGGLE_MORE:
            return Object.assign({}, state, {
                blogs: state.blogs.map((blog, index) => {
                    if (blog.id === action.index) {
                        return Object.assign({}, blog, {
                            moreFormDisplay: !blog.moreFormDisplay
                        });
                    } 

                    return blog;
                    
                })
            });

        case ADD_BLOG:
            let newState =  Object.assign({}, state, {
                blogs: [
                    ...state.blogs,
                    {
                        id: action.blog.id,
                        title: action.blog.title,
                        content: action.blog.content,
                        time: action.blog.time,
                        timeLong: action.blog.timeLong,
                        moreFormDisplay: false
                    }
                ]
            });
            localStorage.setItem('data',JSON.stringify(newState.blogs));
            return newState;

        case UPDATE_BLOG:
            // console.log(action.blog);
            const updateState = Object.assign({}, state, {
                blogs: state.blogs.map((blog, index) => {
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
            });
            // console.log(updateState);
            localStorage.setItem('data',JSON.stringify(updateState.blogs));
            return updateState;

        case DELETE_BLOG:
            console.log(action.index)
            const blogArr = Object.assign([], state.blogs);
            blogArr.map((blog, index) => {
                if(blog.id == action.index){
                    blogArr.splice(index, 1);
                }
            });

            localStorage.setItem('data',JSON.stringify(blogArr));

            return Object.assign({}, state, {
                blogs: blogArr
            });

        default:
            return state;
    }

};


export default rootReducer;