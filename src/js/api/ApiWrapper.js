import api from './config'

class ApiWrapper {
  extra_header = {}
  type
  api

  constructor(typeRequest) {
    this.type = typeRequest
    this.api = api
  }

  makeRequest(uri, data = {}) {
    switch (this.type) {
      case 'get':
        return this.api.get(uri, { params: { ...data } })
      case 'post':
        return this.api.post(uri, { ...data })
      case 'put':
        return this.api.put(uri, data)
      case 'patch':
        return this.api.patch(uri, data)
      case 'delete':
        return this.api.delete(uri, { params: { ...data } })
      default:
        return this.api.get(uri, { params: { ...data } })
    }
  }
  
}

export default ApiWrapper
