// const nameElement = document.getElementById('name');
// const roleElement = document.getElementById('role');
// const imgElement = document.getElementById('img');
const divElement = document.getElementById('divCard');


const teamList = [
    {
        name : "Wayne Barnett",
        role: "Founder & CEO",
        img : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role: "Chief Editor",
        img : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role: "Office Manager",
        img : "walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role: "Social Media Manager",
        img : "angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role: "Developer",
        img : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role: "Graphic Designer",
        img : "barbara-ramos-graphic-designer.jpg"
    }
]


    for ( let i=0; i<teamList.length; i++)
{   
    const teamListElement = teamList[i];
    // console.log(teamListElement.name, teamListElement.role, teamListElement.img)
    // const newH1Element = document.createElement('h1');
    // const newImgElement = document.createElement('img');
    //!! newImgElement.innerHTML=`<img src="./img/${teamListElement.img}" alt="">`;
    // newH1Element.innerText = teamListElement.name;
    // nameElement.append(newH1Element);



    const cardElement = document.createElement('div');
    cardElement.innerHTML=`
    <div class="col mb-4">
                <div class="card shadow-sm">
                  
                  <img src="./img/${teamListElement.img}" alt="">
                  <div class="card-body">
                    <h1 id="name">
                        ${teamListElement.name}
                    </h1>
                    <p class="text-info" id="role">${teamListElement.role}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Call</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Contact</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    `;
    divElement.append(cardElement);
}
