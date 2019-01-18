import MTProto from 'telegram-mtproto'
import { Storage } from 'mtproto-storage-browser'

const config = {
    api_id: 392673,
    api_hash: '1df5c972c50d5faa9d7eff57757fd16e'
}

const app = {
    storage: new Storage()
}
const server = { webogram: true, dev: false }
const api = {
    invokeWithLayer: 0xda9b0d0d,
    layer: 57,
    initConnection: 0x69796de9,
    api_id: config.api_id,
    app_version: '1.0.1',
    lang_code: 'en'
}
const client = MTProto({ server, api, app })


let phoneCodeHash = ''

const sendCode = async(num) => {
    const { phone_code_hash } = await client('auth.sendCode', {
        phone_number: num,
        current_number: false,
        api_id: config.api_id,
        api_hash: config.api_hash
    })

    console.log('phone_code_hash as ', phone_code_hash)
    phoneCodeHash = phone_code_hash

    return
}
const signIn = async(num, code) => {
    const { user } = await client('auth.signIn', {
        phone_number: num,
        phone_code_hash: phoneCodeHash,
        phone_code: code
    })

    console.log('signed as ', user)

    app.storage.set('signedin', true)
    console.log('signed in successfully')

    return user
}
const checklogin = async() => {
    if (!(await app.storage.get('signedin'))) {
        console.log('not signed in')
        return 1
    } else {
        console.log('already signed in')
        return 2
    }
}
const getDialogs = async() => {
    const dialogs = await client('messages.getDialogs', {
        limit: 20
    })
    console.log('dialogs', dialogs)

    return dialogs
}

export default {
    sendCode: sendCode,
    signIn: signIn,
    checklogin: checklogin,
    getDialogs: getDialogs,
}