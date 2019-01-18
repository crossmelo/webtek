import MTProto from 'telegram-mtproto'
import { Storage } from 'mtproto-storage-browser'

const config = {
    api_id: 392673,
    api_hash: '1df5c972c50d5faa9d7eff57757fd16e'
}

const api = {
    layer: 57,
    initConnection: 0x69796de9,
    api_id: 392673
}

// const server = {
//     dev: false
// }

const app = {
        storage: new Storage()
    }
    // const server = { webogram: false, dev: false }
    // const server = { webogram: true, dev: true }
const server = { webogram: true, dev: false }
    // const api = {
    //         invokeWithLayer: 0xda9b0d0d,
    //         layer: 57,
    //         initConnection: 0x69796de9,
    //         api_id: config.api_id,
    //         app_version: '1.0.1',
    //         lang_code: 'en'
    //     }
    // const client = MTProto({ server, api })
const client = MTProto({ server, api, app })

// const firstInstance = MTProto({
//     app: {
//       storage: new Storage(),
//     }
// })  

// const secondInstance = MTProto({
//     app: {
//       storage: new Storage(), 
//     }
// })

let phoneCodeHash = ''

const sendCode = async(num) => {
    const { phone_code_hash } = await client('auth.sendCode', {
        phone_number: num,
        // phone_number: '+9996620001',
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
        // phone_number: '+9996620001',
        phone_code_hash: phoneCodeHash,
        phone_code: code
            // phone_code: '22222'
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
const getNearestDc = async() => {
    const nearestDc = await client('help.getNearestDc')
    console.log('nearestDc', nearestDc)

    return nearestDc
}
const getState = async() => {
    const getState = await client('updates.getState')
    console.log('getState', getState)

    return getState
}
const getDialogs = async() => {
    const dialogs = await client('messages.getDialogs', {
        flags: 0,
        offset_date: 0,
        offset_id: 0,
        offset_peer: { _: "inputPeerEmpty" },
        limit: 20
    })
    console.log('dialogs', dialogs)

    return dialogs
}
const getFullUser = async(id) => {
    const fullUser = await client('users.getFullUser', {
        // id: id
        id: { _: 'inputUserSelf' }
    })
    console.log('fullUser', fullUser)

    return fullUser
}
const getUserPhotos = async(id) => {
    const photos = await client('photos.getUserPhotos', {
        // user_id: id
        id: { _: 'inputUserSelf' }
    })
    console.log('photos', photos)

    return photos
}
const getFile = async(inputLocation) => {
    const files = await client('upload.getFile', {
        location: inputLocation,
        offset: 0,
        limit: 1024 * 1024
    })
    console.log('files', files)

    return files
}

const logOut = async() => {
    const logOut = await client('auth.logOut')
    console.log('logOut as ', logOut)

    return logOut
}

export default {
    sendCode: sendCode,
    signIn: signIn,
    checklogin: checklogin,
    getNearestDc: getNearestDc,
    getState: getState,
    getDialogs: getDialogs,
    getFullUser: getFullUser,
    getUserPhotos: getUserPhotos,
    getFile: getFile,
    logOut: logOut
}