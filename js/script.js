const overView = document.querySelector(".overview");
const username = "brian-hornbrook";

// git hub profile
const profile = async function () {
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const user = await userData.json();
    displayProfile(user);
    console.log(user.url);
};
profile();

const displayProfile = function (user) {
    const userProfile = document.createElement("div");
    userProfile.classList.add("user-info");
    userProfile.innerHTML =
        `<figure>
            <img src="${user.avatar_url}" alt="user avatar">
        </figure>
        <div>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Bio:</strong> ${user.bio}</p>
            <p><strong>Location:</strong> ${user.location}</p>
            <p><strong>Number of public repos:</strong> ${user.public_repos}</p>
        </div>`;
    overView.append(userProfile);
};