import web3 from './web3';

//Contract deployed on rinkeby, ABI from Remix
// *(07-07-2021 | 17:21)* Right now the contract is a simplyfied version, just an event emitter.

const address = "0x07FBac5868221462A45A0D1a7905213Ca086A5bd";
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "rHash",
				"type": "string"
			}
		],
		"name": "registerHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "RegisterHash",
		"type": "event"
	}
];

export default new web3.eth.Contract(abi, address);