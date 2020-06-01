import {AuthService} from './auth.service'

const service = new AuthService()
service.init({env: "development",url:""})

test("register user should success", async () => {
    // given
    const username = "sometitle"
    const email = "somedescription@test.com"
    const password = "w"
    const role = 2

    // when
    const register = await service.registerUser(username,email,password,role)

    // then
    expect(register.id).toEqual("3")
    expect(register.status).toEqual(200)
    expect(register.token).not.toBeNull()
})

test("register user not success", async () => {
    // given
    const username = "sometitle"
    const email = "somedescript2./dw.dsion@t/estcom"
    const password = "w"
    const role = 2

    // when
    const registerFail = await service.registerUser(username,email,password,role)

    // then
    expect(registerFail.status).toEqual(400)
    expect(registerFail.token).toBeUndefined()
})

test("login must success", async () => {
    // given
    const username = "sometitle"
    const password = "w"

    // when
    const login = await service.loginUser(username,password)

    // then
    expect(login.id).toEqual("3")
    expect(login.status).toEqual(200)
})


test("login must fail", async () => {
    // given
    const username = "s2ometitle"
    const password = "w"

    // when
    const login = await service.loginUser(username,password)

    // then
    expect(login.id).toBeUndefined()
    expect(login.status).toEqual(400)
})
