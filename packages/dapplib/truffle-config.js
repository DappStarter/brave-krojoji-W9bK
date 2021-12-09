require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove rice sad evil heavy end army gentle'; 
let testAccounts = [
"0x08b91822f9e57dc92c9c6c65dd621a59744c7a960e8cfcb705e2a77677c9efc4",
"0x548ab2fc03b5b1c01770425d58d0ff232bc0243c0d937d5130253b404e760706",
"0x3391916468d512a2f4a1f881d7c58905d692776de188ac42755bb2bcdc8c36db",
"0xc51156900a0c784ad962656041f2709847d37860e6f7885f60ad09558df95a59",
"0x174ed83c3850997e11c5d5433411fd083f7ddc3f9c1a00aa2839e5d6df18b298",
"0xc3051fd9815c3932e4a6585f3f2a7dfabcf229f49e23e32e5416d59d00078708",
"0x4730afbd9a79cf86b4d559291229b0da893a084247f05d0c68597035a933d344",
"0xcc8f626b9dd7392740848a451439abbc73bce6b6862a70ab697f4c259fef0cb5",
"0xa3379557b633b8863bc1fbe8b3a7287e34a72b198a8a949f4ef0f3bab6ca641d",
"0xff5e8a28df3688c43eda0a3c95272eec68e64101ceeb972e43fd0d10334a5061"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


