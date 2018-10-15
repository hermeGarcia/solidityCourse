pragma solidity ^0.4.17;//version de solidity para la que se ha creado el programa


contract Inbox
{
    //declarar una variable como publica creara un metodo message() que devuelve el valor de la variable, por lo tanto
    //la funcion getMessage es inutil.
    string public message;


    function Inbox(string initialMessage) public
    {
        message = initialMessage;
    }

//una funcion que modifica el contrato no puede
//devolver nada.
    function setMessage(string newMessage) public
    {
        message = newMessage;
    }
}
