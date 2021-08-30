pragma solidity ^0.4.24;

//Needs to be deployed on rinkeby with remix
//Rinkeby Address 0x07FBac5868221462A45A0D1a7905213Ca086A5bd


contract StoreDocument{
    
    event RegisterHash(address indexed owner, string _hash );

    //Event Emitter
    function registerHash(string rHash) public {
        emit RegisterHash(msg.sender, rHash);
    }

}



/*

****OLD CONTRACT*****

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

*/