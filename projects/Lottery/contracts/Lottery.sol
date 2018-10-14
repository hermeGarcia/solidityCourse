pragma solidity ^0.4.17;//version de solidity para la que se ha creado el programa


contract Lottery
{
    address public  manager ;
    address [] public players;

    function Lottery() public
    {
        manager = msg.sender;
    }

    modifier onlyOwner {

        require(msg.sender == manager);
        _;//indica donde se pondra el codigo que esta indicado como onlyOwner

    }

    function enter() public payable
    {
        require(msg.value > .01 ether );
        players.push(msg.sender);
    }
    function getPlayers() public view returns (address [])
    {
        return players;
    }


    function pickWinner() public onlyOwner payable
    {
        uint index =  random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);

    }

    function random() public view returns (uint)
    {
        return uint(sha3(block.difficulty,now,players));
    }
}
