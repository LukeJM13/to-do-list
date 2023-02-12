function newActivity() {
    let activity = document.getElementById('input').value;
    if (activity === "") {
        alert("You have entered nothing!");
    } else {
        let li = document.createElement("li");
        var t = document.createTextNode(activity);
        li.appendChild(t);
        document.getElementById("list").appendChild(li);
        document.getElementById('input').value = "";
    }
}