import axios from 'axios'

export const main = async (args) => {
    try {
        const res = await axios.get('https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-38b26ef4-97c5-4e47-b87e-b86b0c439f3a/manage-seeds/generateSeed' + '?name=' + (args.name || ''))
        return {
            statusCode: res.status,
            body: res.data
        }
    } catch (err) {
        return {
            message: err.message,
            statusCode: 400
        }
    }
}