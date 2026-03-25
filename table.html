<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Panel</title>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<style>
body {
    font-family: Arial;
    background: #f2f2f2;
    padding: 10px;
}

.frame {
    width: 100%;
    height: 300px;
    overflow-y: auto;
    overflow-x: auto;
    background: white;
    border-radius: 10px;
    margin-bottom: 20px;
}

table {
    min-width: 800px;
    border-collapse: collapse;
}

td, th {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: center;
    white-space: nowrap;
}

input {
    width: 100%;
    border: none;
    text-align: center;
    background: transparent;
}

h2 {
    margin: 5px 0;
}
</style>
</head>

<body>

<h2>User Table</h2>
<div class="frame">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Password</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody id="userData"></tbody>
    </table>
</div>

<h2>Game Result</h2>
<div class="frame">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Number</th>
                <th>Open</th>
                <th>Close</th>
            </tr>
        </thead>
        <tbody id="gameData"></tbody>
    </table>
</div>

<h2>History</h2>
<div class="frame">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Game</th>
                <th>Number</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody id="historyData"></tbody>
    </table>
</div>

<script>
const supabase = window.supabase.createClient(
    "https://katbdbzoufiblnnsoxkk.supabase.co",
    "sb_publishable_--fdpQMmSlUyt2ywjUErgQ_LXGvQH-a"
)


// USER TABLE
async function loadUsers(){
    const { data } = await supabase.from("user").select("*")

    let html = ""
    data.forEach(row => {
        html += `
        <tr>
            <td>${row.id}</td>
            <td><input value="${row.name}" onchange="updateUser(this,'name','${row.id}')"></td>
            <td><input value="${row.mobile}" onchange="updateUser(this,'mobile','${row.id}')"></td>
            <td><input value="${row.password}" onchange="updateUser(this,'password','${row.id}')"></td>
            <td><input value="${row.balance}" onchange="updateUser(this,'balance','${row.id}')"></td>
        </tr>`
    })

    document.getElementById("userData").innerHTML = html
}

async function updateUser(input, column, id){
    await supabase.from("user").update({ [column]: input.value }).eq("id", id)
}


// GAME RESULT
async function loadGames(){
    const { data } = await supabase.from("game result").select("*")

    let html = ""
    data.forEach(row => {
        html += `
        <tr>
            <td>${row.id}</td>
            <td><input value="${row.name}" onchange="updateGame(this,'name','${row.id}')"></td>
            <td><input value="${row.number}" onchange="updateGame(this,'number','${row.id}')"></td>
            <td><input value="${row.open}" onchange="updateGame(this,'open','${row.id}')"></td>
            <td><input value="${row.close}" onchange="updateGame(this,'close','${row.id}')"></td>
        </tr>`
    })

    document.getElementById("gameData").innerHTML = html
}

async function updateGame(input, column, id){
    await supabase.from("game result").update({ [column]: input.value }).eq("id", id)
}


// HISTORY
async function loadHistory(){
    const { data } = await supabase.from("history").select("*")

    let html = ""
    data.forEach(row => {
        html += `
        <tr>
            <td>${row.id}</td>
            <td>${row.user_id}</td>
            <td>${row.game}</td>
            <td>${row.number}</td>
            <td>${row.amount}</td>
            <td>${row.status}</td>
        </tr>`
    })

    document.getElementById("historyData").innerHTML = html
}


// LOAD ALL
loadUsers()
loadGames()
loadHistory()
</script>

</body>
</html>
