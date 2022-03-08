const Engineer = require('../lib/Engineer');

describe('Testing Engineer creation', ()=> {
  it('testing if the getName returns name', () =>{

    //Arrange
    const name = 'John';

    //Action
    const c = new Engineer(name, '', '', '')

    //Assertion
    expect(c.getName()).toEqual(name);
  })
  it('testing if the id returns id', () =>{

    //Arrange
    const id = '12';
    //Action
    const c = new Engineer('', id, '', '')

    //Assertion
    expect(c.getId()).toEqual(id);
  })
  it('testing if the getEmail returns email', () =>{

    //Arrange
    const email = 'John.adam@gmail.com';

    //Action
    const c = new Engineer('', '', email, '')

    //Assertion
    expect(c.getEmail()).toEqual(email);
  })
  it('testing if the getOfficeNumber returns office number', () =>{

    //Arrange
    const github = 'rekhaLeelara';

    //Action
    const c = new Engineer('', '', '', github)

    //Assertion
    expect(c.getGithub()).toEqual(github);
  })

  it('testing if the getOfficeNumber returns office number', () =>{

    //Arrange
    const testVal = 'Engineer';
    const name = 'John';
    const id = '12';
    const email = 'John.adam@gmail.com';
    const github = 'rekhaLeelara';

    //Action
    const c = new Engineer(name, id, email, github)

    //Assertion
    expect(typeof c).toEqual('object');
  })

  it('testing if the getRole returns role', () =>{

    //Arrange
    const role = "Engineer"

    //Action
    const c = new Engineer('', '', '', '')

    //Assertion
    expect(c.getRole()).toEqual(role);
  })
}

)