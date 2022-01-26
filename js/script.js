const overView = document.querySelector(".overview");
const repoList = document.querySelector(".repo-list");
const username = "brian-hornbrook";

// profile
const profile = async function () {
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const user = await userData.json();
    displayProfile(user);
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
    loadRepos();
};

// repos
const loadRepos = async function () {
    const userRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repos = await userRepos.json();
    displayRepos(repos);
};

const displayRepos = function (repos) {
    repos.forEach(repo => {
        const eachRepo = document.createElement("li");
        eachRepo.innerHTML = `<h3 class="repo">${repo.name}</h3>`;
        repoList.append(eachRepo);

        console.log(repo.name);
    });
};
