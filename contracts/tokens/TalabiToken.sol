import "../libraries/ERC20.sol";

pragma solidity 0.7.0;

contract TalabiToken is ERC20Token {
    constructor() ERC20Token("TalabiToken", "TAL") {}
}