/**
 *  action 类型
 */
export const TOGGLE_ADD = 'TOGGLE_ADD';
export const ADD_BLOG = 'ADD_BLOG';
export const UPDATE_BLOG = 'UPDATE_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';

/**
 *  action 创建函数
 */
export function addFormDisplay () {
    return { type: TOGGLE_ADD }
};

export function addBlog (blog) {
    return {
        type: ADD_BLOG,
        blog
    }
};

export function updateBlog (blog) {
    return {
        type: UPDATE_BLOG, 
        blog
    }
};

export function deleteBlog (index) {
    return {
        type: DELETE_BLOG, 
        index
    }
};
