const ethWallet = require("ethereumjs-wallet")

const prefix = "abc"
const suffix ="d"

const prefixLength = prefix.length + 2
const suffixLength = suffix.length
let hasFoundIt = false
let addressData
let preTemp
let sufTemp
let a

const start = new Date().getTime()

while (!hasFoundIt){
   addressData =  ethWallet["default"].generate()
   a = addressData.getAddressString()
   preTemp = a.substring(2, prefixLength)
   sufTemp = a.substring(a.length, a.length - suffixLength)
   if(preTemp.includes(prefix) && sufTemp.includes(suffix)){
     console.log("Got it!")
     console.log("Private Key: ", addressData.getPrivateKeyString())
     console.log("Public Key: ", addressData.getAddressString())
     hasFoundIt =true
   }
}

const end = new Date().getTime()

const time = end - start
console.log("Execution Time: ", time /1000, " seconds")


