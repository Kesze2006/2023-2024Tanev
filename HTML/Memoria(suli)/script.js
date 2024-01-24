var kepekUrl=[
"akos.png",
"csocsi.png",
"dani.png",
"gabo.png",
"igen.png",
"laci.png",
"martin.png",
"oliver.png",
"penge.png"]


function init()
{
    kepKirakas();
}

function kepKirakas()
{
    
    let asztal = document.getElementById("asztal");

    for(let i=0; i < kepekUrl.length;i++)
    {
        let uj = document.createElement("img");
        uj.src="kepek/" + kepekUrl[i];
        asztal.appendChild(uj);
    }

}