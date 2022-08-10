import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://62ed48d7818ab252b60e1d89.mockapi.io/contacts'


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts', //под капотом создаст статусы
    async (_, { rejectedWithValue }) => {
        try {
            const { data } = await axios.get('/contacts')
            return data
        } catch (error) {
            return rejectedWithValue(error)
        }

    }
)


export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, { rejectedWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact)
           
            return data
        } catch (error) {
            return rejectedWithValue(error)
        }

    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',

    async (id, { rejectedWithValue }) => {
        try {
            await axios.delete(`/contacts/${id}`)
            return id
        } catch (error) {
            return rejectedWithValue(error)
        }

    }

)

