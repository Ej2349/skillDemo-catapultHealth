
const CatapultAPI = require('../api/CataputAPI')
const api = require('../api/CataputAPI')
const regex =  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gm
var getId = null;

describe("Teting the dictionary API",() =>  {
    
    it("Id has to be created and should be made of letters and number", async () => {
        const res = api.createId();
        getId = await res.then( (id) => id.data.id)
        const regexExp = new RegExp(regex);
        expect(getId).toMatch(regexExp)
    })

    it('All the keys should be displayed', async () => {
        const res = api.getAllKey(getId);
        const status = await res.then((info) => info.data)
        expect(status).not.toBeNull()
    })

    it('value should be stored.', async () => {
        const res = api.createKeyAndValue(getId, 10)
        const statusCode = await res.then(info => info.status);
        expect(statusCode >= 200 || statusCode <= 209).toBe(true)
    })

    it('value should be displayed', async () => {
        const res = api.getValue(getId, 10)
        const data = await res.then(info => info.data.value);
        expect(data != null || data !=  undefined).toBe(true)
    })

    it('value should be deleted', async () => {
        const res = api.deleteKeyValuePair(getId, 10)
        const statusCode = await res.then(info => info.status)
        expect(statusCode >= 200 || statusCode <= 209).toBe(true)
    })

    it('Delete the dictionary content by id', async () => {
        const res = api.deleteById(getId);
        const statusCode = await res.then((info) => info.status)
        expect(statusCode >= 200 || statusCode <= 209).toBe(true)
    })
})