require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue radar rifle honey grace beach tail style'; 
let testAccounts = [
"0x7fb4b5cfbd6f8991d71c2d32daae5fba8d0362fa6156b61e1ce832e5d22974a0",
"0xb0de13753b114ce676dc854a08c0f4997e485d6a04c6705c2f1b4d199d804000",
"0xa0e4f5518e2eaced755927481db946673c7b3d9becee9503c58d1e9480cf4a0a",
"0x170e3d84af5929161813fb2f1fda9d80bb64c5db9240fcb0eea019f7e599eff7",
"0xba8ed93a501f140e254faa32c43a4d15e4d5755551f84b8c2789121946e8fe4f",
"0xe618e287d0a53a36a8d3dac5788a49455cf369d462045a6b281dcfe6fa4ab6d3",
"0xf575dcb43a9e8d3297e5490bd004a57b7904a25a14d0af98102018b703354f4b",
"0x3ec865a4fc7f4390f417933755bcc6f96ad83587347186149c6895fc738d9f8a",
"0xfb2b2b0bee4cc120a29e61483fb2624a07df72b5beeb20b974b4b87448a4d8eb",
"0x7e3247fb4cb163ddc793e6f8edfba5763ba4ecafe36561e572a64c3b76e96c33"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

