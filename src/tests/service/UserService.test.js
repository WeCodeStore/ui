
import {axiosUser} from '../../services/ApiSetup';
import mockAxios from "axios";
import UserService from'../../services/userService';


describe("fetchAllUser", () => {
    const mockData = [{firstName:'John', lastName:'Smith', email:'john@gmaail.com', role:'user', shippingAddress:{}, billingAddress:{}, phoneNumber:''}];
    it ("Should return all  users", async () =>{        
      mockAxios.get.mockImplementationOnce(() =>
         ({ data: mockData }),
      )

      const response = await UserService.getAllUser();
      expect(response.data).toEqual(mockData);
    })

    it ("Should return ampty user list", async () =>{
          mockAxios.get.mockImplementationOnce(() =>
             ({ data: [] }),
          )
    
          const response = await UserService.getAllUser();
          expect(response.data).toEqual([]);
        })
});

describe("Register user", () => {
    const mockData = {email:'jdoe@email.com', password:'pass10', firstName:'Jane', lastName:'Doe', shippingAddress:{},billingAddress:{}, phoneNumber:'321567890' }
    it("should return registered user", async () => {
        mockAxios.post.mockImplementationOnce(() =>
        ({ data: mockData }),
     )

     const response = await UserService.registerUser(mockData);
     expect(response.data).toEqual(mockData); 
    });
});


describe("Login user", () => {
    const mockData = {email:'jdoe@email.com', password:'pass10', firstName:'Jane', lastName:'Doe', shippingAddress:{},billingAddress:{}, phoneNumber:'321567890' }
    it("should return login user data", async () => {
        mockAxios.post.mockImplementationOnce(() =>
        ({ data: mockData }),
     )

     const response = await UserService.registerUser({email:'jdoe@email.com'});
     expect(response.data.email).toEqual(mockData.email); 
    });
});
