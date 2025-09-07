// date and time
function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  document.querySelector(".date").textContent = formatted;
}
setInterval(updateClock, 1000);
updateClock();

// load users from api
function loadUserOptions() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      const getSelect = document.getElementById("get-id");
      const deleteSelect = document.getElementById("action-id");

      users.forEach((user) => {
        const option1 = document.createElement("option");
        option1.value = user.id;
        option1.textContent = `User ${user.id}`;
        getSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = user.id;
        option2.textContent = `User ${user.id}`;
        deleteSelect.appendChild(option2);
      });
    })
    .catch((err) => console.error("Error loading user options:", err));
}
window.onload = loadUserOptions;

// get user
function getUser() {
  const selected = document.getElementById("get-id").value;
  const user =
    selected === "all"
      ? "https://jsonplaceholder.typicode.com/users"
      : `https://jsonplaceholder.typicode.com/users/${selected}`;

  fetch(user)
    .then((res) => res.json())
    .then((data) => {
      const users = Array.isArray(data) ? data : [data];
      displayUsers(users);
    })
    .catch(() => {
      document.querySelector(
        ".user-cards"
      ).innerHTML = `<p style="color:red;">Error fetching user</p>`;
    });
}

// post user
function postUser() {
  const name = document.getElementById("post-name").value.trim();
  const phone = document.getElementById("post-phone").value.trim();

  if (!name || !phone) {
    alert("Please fill in both fields.");
    return;
  }

  const payload = { name, phone };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((user) => {
      alert("User added");
      displayUsers([user]);
    })
    .catch((err) => console.error("Error posting user:", err));
}

// delete user
function deleteUser() {
  const id = document.getElementById("action-id").value;

  if (!id) {
    alert("Please select a user ID to delete.");
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      alert(`User ${id} deleted`);
      document.querySelector(".user-cards").innerHTML = "";
    })
    .catch((err) => console.error("Error deleting user:", err));
}

// display
function displayUsers(users) {
  const container = document.querySelector(".user-cards");
  container.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${user.name} (ID: ${user.id || "?"})</h3>
      <p>Phone: ${user.phone}</p>
      <p>Email: ${user.email || "N/A"}</p>
    `;
    container.appendChild(card);
  });
}
