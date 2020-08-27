const {getProfile} = require('../../server/controllers/usersController')

describe('endpoint testing', () => {

    test('getProfile should get profile info', async () => {
        // expect.assertions(1)

        const data = await getProfile();
        const id = '9C7Z23jPSdh2Q0fAwPstp5Q0jTN2'
        expect(data.length).not.toBeNaN()
    })

})