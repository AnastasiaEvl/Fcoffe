import axios from "axios";
import {setUser} from "../reducers/UserReducer";


export const registration = (email, password) => {
    console.log(email + " " + password + " " );
    return async dispatch => {
        try {
            console.log("It's login dispatch" + email + " " + password);
            const response = await axios.post(`http://localhost:3001/login`, {
                "email": email,
                "password": password
            })
            console.log("I registered" + response);
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log("I'm not registered")
            alert('ERROR_LOGIN')
        }
    }
}

export const auth = (email, password) => {
    return async dispatch => {
        try {
            console.log("It's auth dispatch" + email + " " + password);
            const response = await axios.post(`http://localhost:3001/auth`, {
                "email": email,
                "password": password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log("I have token");
        } catch (e) {
            console.log("token not given")
        }
    }
}

export const logout = () => {
    localStorage.clear();
}

export const sendToken = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:3001/auth`,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert("ERROR_AUTH")
            localStorage.removeItem('token')
        }
    }
}