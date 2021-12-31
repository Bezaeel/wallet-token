import "./interface/IFamilyStore.sol";
import "../models/Schema.sol";

pragma experimental ABIEncoderV2;
pragma solidity 0.7.0;

contract FamilyStore is IFamilyStore {
    Family[] private _families;

    constructor(){}

    function createFamily(Family memory family) external override returns (uint) {
        uint256 recordIndex = _families.length;
        
        family.Id = recordIndex + 1;
        _families.push(family);
        
        return family.Id;
    }

    function getFamilyById(uint id) external view override returns (string memory) {
        return _families[id].FamilyName;
    }

}