import axios from 'axios'

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: 'Bearer vguwkxqP0-vwkHqBVtNsIsDE9qb_9D7X0PdH_rwTh25kaGatgL8zEhRxjkG8YnxUbQufNDDHHGkLdeMkFCdBt-fQVELIH6ibhqJR_1z6VJkA6FaLAnv3a6RpoOJRYHYx'
  }
})
