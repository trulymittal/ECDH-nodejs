## Elliptic-curve Diffie–Hellman (ECDH)

This repo describes how to **generate a shared secret** between two clients, Alice and Bob, using Elliptic-curve Diffie–Hellman (ECDH) key exchange. This repo uses **secp256k1 curve** which will be used to generate a shared secret key that is **256 bits** long, which will be as secure as a normal 3072-bit key generated using plain Diffie-Hellman.
You can change the curve name to use other curves to get a desired bit length key (like: 384 bits, using secp384r1 curve)

Elliptic curves are much more powerful in the way that they are more secure and moreover
they require less computing power for the same amount security. The shared key generated using ECDH which is 256 bit long is as secure as a 3072 bit long shared key generated using traditional Diffie-Hellman.

### How to use this repo

1. Clone the repo using

```bash
git clone https://github.com/trulymittal/ECDH-nodejs.git
```

2. Open terminal inside the downloaded project and install the dependencies using:

```bash
npm install
```

3. Finally run the script using:

```bash
npm start
```

## Authors

- [**Truly Mittal**](https://trulymittal.com)

## License

This project is licensed under the MIT License.
