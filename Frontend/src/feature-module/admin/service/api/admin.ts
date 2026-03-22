import apiClient from './apiClient'

export const getAdmin = async () => {
    const response = await apiClient.get('/admin/profile')
    // backend returns { success: true, admin: { id, name, phoneNum } }
    return response.data?.admin ?? response.data
}

export const updateAdmin = async (payload: { name: string }) => {
    const response = await apiClient.patch('/admin/profile', payload)
    return response.data?.admin ?? response.data
}
