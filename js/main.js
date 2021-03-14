var existingEntries = JSON.parse(localStorage.getItem("All"));
var form = document.getElementById("myForm");

function openForm(){
    form.style.display="block";
}

function closeForm(){
    form.style.display="none";
}

function addNewBookmark() {
    if (existingEntries === null) existingEntries = [];
                
    var nameInput = document.getElementById("name").value;
    var urlInput = document.getElementById("url").value;
    var catInput = document.getElementById("category").value;

    if (nameInput === "" || urlInput === ""){
        alert("Enter a bookmark!");
        return;
    }

    var bookmark = {"Name": nameInput, "Url": urlInput, "Cat": catInput};
                
    existingEntries.push(bookmark);
    localStorage.setItem("All", JSON.stringify(existingEntries));
    console.log("Saved:" + JSON.stringify(bookmark));
                 
    var a = document.createElement('a');
    var linkText = document.createTextNode(bookmark.Name);
    a.appendChild(linkText);
    a.href = bookmark.Url;
    a.setAttribute('class','uline-effect');
    a.target = "_blank";

    document.getElementById(bookmark.Cat).appendChild(a);
    closeForm();
}

function loadExistingBookmarksFromStorage(){
    for (var i = 0; i < existingEntries.length; i++) { 
        var a = document.createElement('a');
        var linkText = document.createTextNode(existingEntries[i].Name);
        a.appendChild(linkText);
        a.href = existingEntries[i].Url;
        a.setAttribute('class', 'uline-effect');
        a.target = "_blank";
        
        document.getElementById(existingEntries[i].Cat).appendChild(a);
    } 
    console.log(existingEntries);
}


function deleteBookmarkAndReload(){
    var getBookmark = prompt("Name of bookmark you want to remove:");

    if (getBookmark != null){
        for (i = 0; i < existingEntries.length; i++){
            if (existingEntries[i].Name === getBookmark){
                existingEntries.splice(i, 1);
                break;
            } 
        }
        localStorage.setItem("All", JSON.stringify(existingEntries));
        location.reload();
    }
}

function clearStorageAndReload(){
    localStorage.clear();
    location.reload();
}