const Employee = require('../lib/Employee');

describe('Testing Employee creation', ()=> {
  it('testing if the getName returns name', () =>{

    //Arrange
    const name = 'John';

    //Action
    const c = new Employee(name, '', '', '')

    //Assertion
    expect(c.getName()).toEqual(name);
  })
  it('testing if the id returns id', () =>{

    //Arrange
    const id = '12';
    //Action
    const c = new Employee('', id, '', '')

    //Assertion
    expect(c.getId()).toEqual(id);
  })
  it('testing if the getEmail returns email', () =>{

    //Arrange
    const email = 'John.adam@gmail.com';

    //Action
    const c = new Employee('', '', email, '')

    //Assertion
    expect(c.getEmail()).toEqual(email);
  })

  it('testing if the getOfficeNumber returns office number', () =>{

    //Arrange
    const testVal = 'Employee';
    const name = 'John';
    const id = '12';
    const email = 'John.adam@gmail.com';
    const officeNumber = 123-456-789;

    //Action
    const c = new Employee(name, id, email, officeNumber)

    //Assertion
    expect(typeof c).toEqual('object');
  })

  it('testing if the getRole returns role', () =>{

    //Arrange
    const role = "Employee"

    //Action
    const c = new Employee('', '', '', '')

    //Assertion
    expect(c.getRole()).toEqual(role);
  })
}

)