
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');


let accounts;
let inbox;
const INITIAL_VALUE = 'HI';
beforeEach(async () => {
      accounts = await web3.eth.getAccounts();

      inbox = await new web3.eth.Contract(JSON.parse(interface))
                    .deploy({data: bytecode, arguments: [INITIAL_VALUE]})
                    .send({from: accounts[0],gas: '1000000'});

      inbox.setProvider(provider);
});


describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();//llamadas en las que no se modifica el contrato, .call()
    assert.equal(message,INITIAL_VALUE);
  }
  );
  it('can change the message', async () => {
      await inbox.methods.setMessage('new Message').send({from: accounts[0]});//llamadas en las que se modica el contrato .send(%identificador de quien paga%)
      const message = await inbox.methods.message().call();
      assert.equal(message,'new Message');
  });
});
