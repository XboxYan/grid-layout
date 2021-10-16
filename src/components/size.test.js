const rewire = require("rewire")
const size = rewire("./size")
const fixStyle = size.__get__("fixStyle")
// @ponicode
describe("fixStyle", () => {
    test("0", () => {
        let param1 = [["XCode", "services_recontextualize_front_end.gif", "Safari"], ["XCode", "png.mpg4", "services_recontextualize_front_end.gif"], ["Safari", "XCode", "arizona_extend.wav"]]
        let callFunction = () => {
            fixStyle(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["png.mpg4", "services_recontextualize_front_end.gif", "png.mpg4"], ["XCode", "bus_account.mpe", "Safari"], ["png.mpg4", "png.mpg4", "bus_account.mpe"]]
        let callFunction = () => {
            fixStyle(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["services_recontextualize_front_end.gif", "Safari", "arizona_extend.wav"], ["arizona_extend.wav", "XCode", "XCode"], ["arizona_extend.wav", "XCode", "XCode"]]
        let callFunction = () => {
            fixStyle(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["services_recontextualize_front_end.gif", "XCode", "services_recontextualize_front_end.gif"], ["Safari", "bus_account.mpe", "Safari"], ["XCode", "XCode", "services_recontextualize_front_end.gif"]]
        let callFunction = () => {
            fixStyle(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["arizona_extend.wav", "png.mpg4", "bus_account.mpe"], ["bus_account.mpe", "arizona_extend.wav", "Safari"], ["XCode", "services_recontextualize_front_end.gif", "services_recontextualize_front_end.gif"]]
        let callFunction = () => {
            fixStyle(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fixStyle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
