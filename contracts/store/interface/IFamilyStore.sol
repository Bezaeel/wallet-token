import "../../models/Schema.sol";

pragma experimental ABIEncoderV2;
pragma solidity 0.7.0;

interface IFamilyStore {
    function createFamily(Family memory family) external returns (uint);
    function getFamilyById(uint id) external view returns (string memory);
}