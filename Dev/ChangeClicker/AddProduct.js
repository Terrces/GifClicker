let elementID = 0;

let InputStyle = "border:none;border-bottom:white solid 2px;background:transparent; accent-color: transparent;width:fit-content;"

function AddChangeElement(type,id)
{

    let changeElement = document.createElement("div");
    let changeElementName = document.createElement("input");
    let changeElementType = document.createElement("text");
    let changeElementOption = document.createElement("input");
    let changeElementDelete = document.createElement("button");

    changeElement.style.backgroundColor = "rgba(0,0,0,0.2)"
    changeElementName.style = InputStyle;
    changeElementOption.style = InputStyle;

    changeElement.id = id + "Change";
    changeElementName.id = id + "ChangeName";
    changeElementType.id = id + "ChangeType";
    changeElementOption.id = id + "ChangeOption";
    changeElementDelete.id = id + "ChangeDelete";

    changeElementName.onchange= function(){
        console.log(id);
        getElementById(string(id)).textContent = changeElementName.value;
    }
    changeElementType.textContent = type
    changeElementDelete.textContent = "delete";

    changeElement.appendChild(changeElementName);
    changeElement.appendChild(changeElementType);
    changeElement.appendChild(changeElementOption);
    changeElement.appendChild(changeElementDelete);

    document.getElementById("ChangeElements").appendChild(changeElement);
}

AddTitle.onclick = function()
{
    let CreateTitle = document.createElement('text');
    CreateTitle.style.fontSize = "larger";
    CreateTitle.textContent = "Placeholder";
    CreateTitle.id = elementID + " title";

    AddChangeElement("Title",CreateTitle.id)
    elementID += 1;
    PreviewSB.appendChild(CreateTitle)
}