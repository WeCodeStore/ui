/*export default {
    get: jest.fn((url) => Promise.resolve({data: {}})),
    create:jest.fn(()=> null)
};*/


const mockAxios = {
    get: jest.fn(()=> Promise.resolve({data:{}})),
    post: jest.fn(()=> Promise.resolve({data:{}}))
}

mockAxios.create = jest.fn(() => mockAxios)

export default mockAxios