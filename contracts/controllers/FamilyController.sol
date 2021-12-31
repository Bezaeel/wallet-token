import "./interface/IFamilyController.sol";
import "../store/interface/IFamilyStore.sol";

pragma experimental ABIEncoderV2;
pragma solidity 0.7.0;

contract FamilyController is IFamilyController {

    IFamilyStore _familyStore;

    constructor(address _addr){
        _familyStore = IFamilyStore(_addr);
    }

    function getFamilyById(uint id) external view override returns (string memory) {
        return _familyStore.getFamilyById(id);
    }

    function createFamily(
        string calldata familyUrl,
        string calldata familyName,
        address familyTokenContractAddress,
        address ownerAddress
    ) external override returns(uint) {
         
        Family memory family = Family(0, familyName, familyUrl, familyTokenContractAddress, ownerAddress);
        family.Id = _familyStore.createFamily(family);
        return family.Id;
    }
}