
function generateHTML() {
    //console.log("GenerateHTML Entry for:", employeesArray);
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Generator</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="team-cards row">
            <div class="card">
                <div class="card-body">`
    //----------------------------------Manager Section-----------------------------------------------------------------------
    console.log("Manager is present");
    managers.forEach((managerElement) => {
        html += `
                <div class="container">
<div class="team-cards row">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${managerElement.getName()}</h4>
            <h5 class="card-subtitle mb-2 text-muted">${managerElement.getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerElement.getId()}</li>
                <li class="list-group-item">Email: ${managerElement.getEmail()}</li>
                <li class="list-group-item">Office Number: ${managerElement.getOffice()}</li>
            </ul>
        </div>
    </div>
</div>
</div>`;
    })

    //--------------------------------------Engineer Section ----------------------------------------------------------

    console.log("Engineer is present");
    engineerssArray.forEach((engineerElement) => {
        html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${engineerElement.getName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${engineerElement.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineerElement.getId()}</li>
                    <li class="list-group-item">Email: ${engineerElement.getEmail()}</li>
                    <li class="list-group-item">Github: ${engineerElement.getGithub()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
    })

    //----------------------------------------Intern Section--------------------------------------------------------
    console.log("Intern is present");
    internsArray.forEach((internsElements) => {
        html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${internsElements.getName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${internsElements.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${internsElements.getId()}</li>
                    <li class="list-group-item">Email: ${internsElements.getEmail()}</li>
                    <li class="list-group-item">School: ${internsElements.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</body>
   </html>`;

    })
}

generateHTML();

module.exports
