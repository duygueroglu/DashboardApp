import React from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import {Button} from '.'
import {userProfileData} from '../data/dummy'
import {useStateContext} from '../contexts/ContextProvider'
import avatar from '../data/avatar.jpg'

const UserProfile = () => {
  const {currentColor} = useStateContext();
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile
