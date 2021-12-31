pragma solidity 0.7.0;

interface IFamilyController {
    function createFamily(
        string calldata familyUrl,
        string calldata familyName,
        address familyTokenContractAddress,
        address ownerAddress
    ) external returns(uint);

    function getFamilyById(uint id) external view returns (string memory);
}