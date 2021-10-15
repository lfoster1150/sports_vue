import Client from './api'

export const UpdateUser = async userId => {
  try {
    const res = await Client.put(`/user/update/${userId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const DeleteUser = async userId => {
  try {
    const res = await Client.delete(`/user/delete/${userId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const GetUserFavorites = async userId => {
  try {
    const res = await Client.get(`/user/${userId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// /user/<int:user_id>
