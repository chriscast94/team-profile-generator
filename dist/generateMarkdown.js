
//Develop HTML
function generateHTML() {
    console.log("GenerateHTML Entry for:", employeesArray);
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
    //identifier will need to change
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
                    <li class="list-group-item">ID: ${managerElement.getID()}</li>
                    <li class="list-group-item">Email: ${managerElement.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${managerElement.getOffice()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
    })

    console.log("Engineer is present");
    employeesArray.forEach((engineersArrayElements) => {
        // Addition assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
        html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${engineersArrayElements.grabName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${engineersArrayElements.grabRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineersArrayElements.grabId()}</li>
                    <li class="list-group-item">Email: ${engineersArrayElements.grabEmail()}</li>
                    <li class="list-group-item">Github: ${engineersArrayElements.grabGithub()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
    })


    if (employeesArray.indexOf("Intern") > -1) {
        console.log("Intern is present");
        employeesArray.forEach((internsArrayElements) => {
            html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${internsArrayElements.grabName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${internsArrayElements.grabRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${internsArrayElements.grabId()}</li>
                    <li class="list-group-item">Email: ${internsArrayElements.grabEmail()}</li>
                    <li class="list-group-item">School: ${internsArrayElements.grabSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
        })
    }
}
