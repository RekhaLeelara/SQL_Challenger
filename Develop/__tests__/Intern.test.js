const Intern = require('../lib/Intern');

describe('Testing Intern creation', ()=> {
  it('testing if the getName returns name', () =>{

    //Arrange
    const name = 'John';

    //Action
    const c = new Intern(name, '', '', '')

    //Assertion
    expect(c.getName()).toEqual(name);
  })
  it('testing if the id returns id', () =>{

    //Arrange
    const id = '12';
    //Action
    const c = new Intern('', id, '', '')

    //Assertion
    expect(c.getId()).toEqual(id);
  })
  it('testing if the getEmail returns email', () =>{

    //Arrange
    const email = 'John.adam@gmail.com';

    //Action
    const c = new Intern('', '', email, '')

    //Assertion
    expect(c.getEmail()).toEqual(email);
  })
  it('testing if the getOfficeNumber returns office number', () =>{

    //Arrange
    const school = 'UMN';

    //Action
    const c = new Intern('', '', '', school)

    //Assertion
    expect(c.getSchool()).toEqual(school);
  })

  it('testing if the getOfficeNumber returns office number', () =>{

    //Arrange
    const testVal = 'Intern';
    const name = 'John';
    const id = '12';
    const email = 'John.adam@gmail.com';
    const school = 'UMN';

    //Action
    const c = new Intern(name, id, email, school)

    //Assertion
    expect(typeof c).toEqual('object');
  })

  it('testing if the getRole returns role', () =>{

    //Arrange
    const role = "Intern"

    //Action
    const c = new Intern('', '', '', '')

    //Assertion
    expect(c.getRole()).toEqual(role);
  })
}

)