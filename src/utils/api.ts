import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

import type { IResponse } from '@/api/types'

const baseUrl = import.meta.env.VITE_API_BASE_URL

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl + '',
})

const header = {}

async function fetchPost<T>(url: string, params?: any): Promise<IResponse<T>> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, params, {
        headers: header,
      })
      .then(
        (response) => {
          resolve(response.data)
        },
        (err) => {
          err.response
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

async function fetchGet<T>(url: string, params?: any): Promise<IResponse<T>> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url, {
        headers: header,
        params: params,
      })
      .then(
        (response) => {
          resolve(response.data)
        },
        (err) => {
          reject(false)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

export { fetchGet, fetchPost }
