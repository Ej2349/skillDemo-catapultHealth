const { default: axios } = require("axios");
const token = 'cWFjYW5kaWRhdGU6c29mdEtpdHR5TGl0dGxlQmFsbG9mRnVy';
const url = 'https://dictionary.iachieved.it/dictionary';

class CatapultAPI {

    createId() {
        return axios.post(`${url}`, {} ,{
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }})
    }
    
    deleteById(id) {
        return axios.delete(`${url}/${id}`,{
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }})
    }

    getAllKey(id) {
        return axios.get(`${url}/${id}/keys`,{
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }})
    }

    createKeyAndValue(id, key) {
        return axios.post(`${url}/${id}/keys/${key}`,{value: 'test in vsc'},{
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }})
    }

    getValue(id, key) {
        return axios.get(`${url}/${id}/keys/${key}`, {
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }
        })
    }

    deleteKeyValuePair(id, key) {
        return axios.delete(`${url}/${id}/keys/${key}`, {
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }})
    }

}

module.exports = new CatapultAPI;