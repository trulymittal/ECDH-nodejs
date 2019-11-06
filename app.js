const crypto = require('crypto');

const alice = crypto.createECDH('secp256k1');
alice.generateKeys();

const bob = crypto.createECDH('secp256k1');
bob.generateKeys();

const alicePublicKeyBase64 = alice.getPublicKey().toString('base64');
const bobPublicKeyBase64 = bob.getPublicKey().toString('base64');

const aliceSharedKey = alice.computeSecret(bobPublicKeyBase64, 'base64', 'hex');
const bobSharedKey = bob.computeSecret(alicePublicKeyBase64, 'base64', 'hex');

console.log(aliceSharedKey === bobSharedKey);
//Shared key in hex
console.log('Alice shared Key: ', aliceSharedKey);
//Shared key in hex
console.log('Bob shared Key: ', bobSharedKey);
//Shared key length in bits (=256 bits)
console.log(
  'Shared Key length of alice(same as bob): ',
  aliceSharedKey.length * 4
);
console.log(
  'Shared Key length of bob(same as alice): ',
  aliceSharedKey.length * 4
);
