import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { API_URL } from '../utils/constants'
import axios from 'axios'
import { addUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.user.user)
  const fetchUser = async () => {
    if(userData) {
      return
    }
    try {
    const response = await axios.get(`${API_URL}/profile/view`, {withCredentials: true})
      console.log(response.data)
      dispatch(addUser(response.data))
    } catch (error) {
      navigate('/login')
      console.error('Error fetching user:', error)
    }
  }
  useEffect(() => {

      fetchUser()
    
  }, [])
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Body