import axios from 'axios';
import React, { useReducer } from 'react';
import { SEARCH_USERS, SET_LOADING } from '../types';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
// CLEAR_USERS, GET_USER, GET_REPOS


const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async (searchTerm) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({type: SEARCH_USERS, payload: data})
    };
    
    const setLoading = () => dispatch({type: SET_LOADING})





    return <GithubContext.Provider value={...state, searchUsers}>{props.children}</GithubContext.Provider>

}

export default GithubState;