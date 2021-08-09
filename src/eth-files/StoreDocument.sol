pragma solidity ^0.4.24;

//Needs to be deployed on rinkeby with remix
//Rinkeby Address 0x29A3307b3e1961AAB2C787bB81862b8212a36F97


contract StoreDocument{

    address                     public  contractOwner;
    address                     public  txOwner;

    constructor() public{
        if(contractOwner == 0x0){
            contractOwner = msg.sender;
            txOwner = msg.sender;
        }
        
        else
            txOwner = msg.sender;

    }
    
    event RegisterHash(address indexed owner, address indexed auditor, string _hash );
    
    //Setters
    function registerHash(string rHash) public {
        emit RegisterHash(msg.sender, rHash);
    }


    // Modifiers
    modifier ownership(){
        require(msg.sender == contractOwner);
        _;
    }
}