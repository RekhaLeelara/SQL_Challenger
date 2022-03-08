// const emp = require('../lib/Engineer');

let html = ""
let finalhtml = ""

// Generating html based on the user role
function generateMarkdown(eng, role) {

  console.log("inside genHTML");
  if (role == 'engineer') {

    html = html + `
    <section class="manager">
    <article class="topsection">                    
        <div id="name">${eng.getName()}</div>
        <div id="role">${eng.getRole()}</div>        
    </article>
    
    <div id="empid">Id: ${eng.getId()}</div>
    <div id="email">Email: 
    <a href="mailto:${eng.getEmail()}" id="emaillink">${eng.getEmail()}</a>
</div>
<div id="gitHub">GitHub: 
<a href="https://github.com/${eng.getGithub()}" id="gitHublink">${eng.getGithub()}</a>
</div>
    
    </section>
    `

    console.log("printing html: "+html);

    return html

  }
  else if ((role == 'intern')) {

    html = html + `
    <section class="manager">
    <article class="topsection">                    
        <div id="name">${eng.getName()}</div>
        <div id="role">${eng.getRole()}</div>        
    </article>
    
    <div id="empid">Id: ${eng.getId()}</div>
    <div id="email">Email: 
    <a href="mailto:${eng.getEmail()}" id="emaillink">${eng.getEmail()}</a>
</div>
    <div id="OfficeNumber">School: ${eng.getSchool()}</div>
    
    </section>
    `

    console.log("printing html: "+html);

    return html

  }
  else if ((role == 'other')) {

    console.log("Entering final html block");

    finalhtml =
      `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Develop/dist/style.css"/>
    <title>Document</title>
</head>
<body>

        <section class="rectanglebox">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <!-- header section -->
            <header id="header"><h1>My Team</h1></header>
            <!-- Questions section -->
            <section class="manager">
                <article class="topsection">                    
                    <div id="name">${eng.getName()}</div>
                    <div id="role">${eng.getRole()}</div>        
                </article>

                <div id="empid">Id: ${eng.getId()}</div>
                <div id="email">Email: 
                <a href="mailto:${eng.getEmail()}" id="emaillink">${eng.getEmail()}</a>
            </div>
                <div id="OfficeNumber">Phone: ${eng.getOfficeNumber()}</div>

            </section>
    
            ${html}

          
            <!-- Quiz pages section -->
            <section class="engineer"></section>
            <!-- Initials page section -->
            <section class="engineer"></section>
            <!-- View high score page section -->
            <section class="intern"></section>
    </section>
        
</body>
</html>
`

    return finalhtml
  }
  else{

  }

}
module.exports = generateMarkdown;
