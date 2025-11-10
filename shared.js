if (localStorage.getItem("login") != "" && localStorage.getItem("logon") == "true") {
    document.getElementById("accountName").innerText = localStorage.getItem("login")
}