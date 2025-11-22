import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Call logout API
        await axios.post(`${API_URL}/logout`, {}, { withCredentials: true })
      } catch (error) {
        console.error('Logout error:', error)
        // Continue with logout even if API call fails
      } finally {
        // Clear user from Redux
        dispatch(removeUser())
        
        // Redirect to login
        navigate('/login')
      }
    }

    handleLogout()
  }, [dispatch, navigate])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

export default Logout

