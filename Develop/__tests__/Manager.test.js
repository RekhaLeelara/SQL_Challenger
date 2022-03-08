const Manager = require('../lib/Manager');

describe('Testing manager creation', ()=> {
  it('testing if the getName returns name', () =>{

    //Arrange
    const name = 'John';

    //Action
    const c = new Manager(name, '', '', '')

    //Assertion
    expect(c.getName()).toEqual(name);
  })
  it('testing if the id returns id', () =>{

    //Arrange
    const id = '12';
    //Action
    const c = new Manager('', id, '', '')

    //Assertion
    expect(c.getId()).toEqual(id);
  })
  it('testing if the getEmail returns email', () =>{

    //Arrange
    const email = 'John.adam@gmail.com';

    //Action
    const c = new Manager('', '', email, '')

    //Assertion
    expect(c.getEmail()).toEqual(email);
  })
  it('testing if the getOfficeNumber returns office number', () =>{

    //Arrange
    const officeNumber = 123-456-789;

    //Action
    const c = new Manager('', '', '', officeNumber)

    //Assertion
    expect(c.getOfficeNumber()).toEqual(officeNumber);
  })

  it('testing if the getOfficeNumber returns office number', () =>{

    //Arrange
    const testVal = 'Manager';
    const name = 'John';
    const id = '12';
    const email = 'John.adam@gmail.com';
    const officeNumber = 123-456-789;

    //Action
    const c = new Manager(name, id, email, officeNumber)

    //Assertion
    expect(typeof c).toEqual('object');
  })

  it('testing if the getRole returns role', () =>{

    //Arrange
    const role = "Manager"

    //Action
    const c = new Manager('', '', '', '')

    //Assertion
    expect(c.getRole()).toEqual(role);
  })
}

)