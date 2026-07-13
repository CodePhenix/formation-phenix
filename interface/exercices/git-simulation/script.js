const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("terminal-input");
const branchesContainer = document.getElementById("branches");
const projectTreeContainer = document.getElementById("project-tree");
const modifyBtn = document.getElementById("modify-btn");
const remoteBranchesContainer = document.getElementById("remote-branches-tocompare-container");
const remoteBranchesBtnContainer = document.getElementById("remote-branches-buttons-compare-container");
const githubPanel = document.getElementById("github-panel");
const rightPanel = document.getElementById("right-panel");
const statusContainer = document.getElementById("status-container");
const branchesPanel = document.getElementById("local-branches-container");
const repoUrlDisplay = document.getElementById("repo-url");
const remoteButtons = document.getElementById("remote-branches-buttons");
const remoteTree = document.getElementById("remote-project-tree");
const remoteCommits = document.getElementById("remote-commits");
const deleteRemoteBranchBtn = document.getElementById("delete-current-branch-btn");
const deleteRemoteBranchMsg = document.getElementById("delete-current-branch-msg");
const remoteStatus = document.getElementById("remote-status");
const copyUrlBtn = document.getElementById("copy-url-btn");
const acceptPRBtn = document.getElementById("accept-pr");

let currentRemoteBranch = "main";

let selectedFile = null;
let modifiedFiles = [];
let stagedFiles = [];
let commandHistory = [];
let historyIndex = -1;
let selectedCompareTarget = "main";

let gitState = {
    branches: {},
    branchFiles: {},
    branchOwnCommits: {},
    currentBranch: null,
    remotes: {},
    files: [],
    cloned: false,
    level: 1,
    remoteBranches: {},
    branchUpstreams: {},
    remoteBranchFiles: {}
};

let fetchedBranches = {};

let projectTemplate = {
    name: "ProjetPhenix",
    type: "folder",
    children: [
        { name: "index.html", type: "file" },
        {
            name: "assets", type: "folder", children: [
                { name: "css", type: "folder", children: [{ name: "style.css", type: "file" }] },
                { name: "js", type: "folder", children: [{ name: "script.js", type: "file" }] }
            ]
        },
        { name: "images", type: "folder", children: [] }
    ]
};

const levels = [
    //Niveau 1
    { msg: "Cloner le dépôt depuis https://gitlab.com/CodePhenix/ProjetPhenix.git", exact: "git clone https://gitlab.com/CodePhenix/ProjetPhenix.git" },

    // Phase 1 : créer dev et push
    //Niveau 2
    { msg: "Créer la branche dev et s'y positionner", exact: "git checkout -b dev" },
    //Niveau 3
    { msg: "Réaliser le premier push de la branche dev", exact: "git push -u origin dev" },

    // Phase 2 : feature/login
    //Niveau 4
    { msg: "Créer une branche login-feature", exact: "git branch login-feature" },
    //Niveau 5
    { msg: "Se positionner sur login-feature", exact: "git checkout login-feature" },
    //Niveau 6
    { msg: "Renommer la branche en feature/login", exact: "git branch -m login-feature feature/login" },
    //Niveau 7
    { msg: "Modifier le fichier local index.html (cliquer dessus)", exact: "MODIFY_INDEX" },
    //Niveau 8
    { msg: "Ajouter index.html à l'index", exact: "git add index.html" },
    //Niveau 9
    { msg: "Faire le commit des modifications", exact: /^git commit -m ".+"/ },
    //Niveau 10
    { msg: "Réaliser le premier push de la branche feature/login", exact: "git push -u origin feature/login" },
    //Niveau 11
    { msg: "Dans Github/Gitlab, depuis la branche remote de développement, créer une pull request de la branche remote de 'feature/login' vers la branche remote de 'dev' et merger", exact: "MERGE feature/login→dev" },
    //Niveau 12
    { msg: "Revenir en local, sur la branche dev, et faire un pull de la branche remote de dev", exact: /^git pull( origin dev)?$/ },
    //Niveau 13
    { msg: "Supprimer la branche locale feature/login", exact: "git branch -d feature/login" },

    // Phase 3 : feature/signup
    //Niveau 14
    { msg: "Créer une branche feature/signup et s'y positionner", exact: "git checkout -b feature/signup" },
    //Niveau 15
    { msg: "Modifier le fichier local script.js", exact: "MODIFY_SCRIPT" },
    //Niveau 16
    { msg: "Ajouter script.js à l'index", exact: "git add script.js" },
    //Niveau 17
    { msg: "Faire le commit des modifications de script.js", exact: /^git commit -m ".+"/ },
    //Niveau 18
    { msg: "Modifier le fichier local style.css", exact: "MODIFY_STYLE" },
    //Niveau 19
    { msg: "Ajouter style.css à l'index et faire le commit", exact: /^git commit -m ".+"/ },
    //Niveau 20
    { msg: "Faire un push de la branche feature/signup", exact: "git push -u origin feature/signup" },
    //Niveau 21
    { msg: "Modifier le fichier local index.html", exact: "MODIFY_INDEX" },
    //Niveau 22
    { msg: "Ajouter index.html et faire le commit", exact: /^git commit -m ".+"/ },
    //Niveau 23
    { msg: "Refaire un push", exact: "git push" },
    //Niveau 24
    { msg: "Dans Github/Gitlab, depuis la branche remote de développement, créer une pull request de la branche remote de 'feature/signup' vers la branche remote de 'dev' et merger", exact: "MERGE feature/signup→dev" },
    //Niveau 25
    { msg: "Revenir en local, sur la branche dev, et faire un pull de la branche remote de dev", exact: /^git pull( origin dev)?$/ },
    //Niveau 26
    { msg: "Supprimer la branche locale feature/signup", exact: "git branch -d feature/signup" },

    // Phase 4 : merge dev → main
    //Niveau 27
    { msg: "Dans Github/Gitlab, depuis la branche main, créer une pull request de la branche remote de 'dev' vers la remote de 'main' et merger", exact: "MERGE dev→main" },
    //Niveau 28
    { msg: "En local, se positionner sur la branche principale main", exact: "git checkout main" },
    //Niveau 29
    { msg: "Faire un git pull depuis main", exact: /^git pull( origin main)?$/ },

    // Phase 5 : travail en équipe
    //Niveau 30
    { msg: "Acceptez la PULL REQUEST de votre collègue (il souhaite merger sa branche remote 'feature/update-array' dans la branche remote de développement)", exact: "ACCEPT_MERGE" },
    //Niveau 31
    { msg: "En local, déplacer vous tout d'abord sur votre branche dev et faire un git pull pour venir récupérer les dernières modifications", exact: /^git pull( origin dev)?$/ },
    //Niveau 32
    { msg: "Faire un fetch pour récupérer les dernières mises à jour du dépôt", exact: "git fetch origin" },
    //Niveau 33
    { msg: "Créer une branche design/new-header à partir de la branche remote du même nom créée par votre collègue", exact: "git checkout -b <nouvellebranche> origin/design/new-header" },
    //Niveau 34
    { msg: "Modifier le fichier local index.html (cliquer dessus)", exact: "MODIFY_INDEX" },
    //Niveau 35
    { msg: "Modifier le fichier local style.css", exact: "MODIFY_STYLE" },
    //Niveau 36
    { msg: "Ajouter les deux fichiers à l'index", exact: "git add ." },
    //Niveau 37
    { msg: "Faire le commit des modifications", exact: /^git commit -m ".+"/ },
    //Niveau 38
    { msg: "Bien joué, le header est maintenant fonctionnel, votre collègue sera ravi ! Maintenant, faire un push", exact: "git push" },
    //Niveau 39
    { msg: "Dans Github/Gitlab, depuis la branche dev, créer une pull request de design/new-header vers la remote de 'dev' et merger", exact: "MERGE design/new-header→dev" },
    //Niveau 40
    { msg: "Revenir en local, sur la branche dev, et faire un pull de la branche remote de dev", exact: /^git pull( origin dev)?$/ },
    //Niveau 41
    { msg: "Supprimer la branche locale correspondant à la remote 'design/new-header'", exact: "git branch -d design/new-header" },
    //Niveau 42
    { msg: "Dans Github/Gitlab, depuis la branche main, créer une pull request de la branche remote de 'dev' vers la remote de 'main' et merger", exact: "MERGE dev→main" },
    //Niveau 43
    { msg: "En local, se positionner sur la branche principale main", exact: "git checkout main" },
    //Niveau 44
    { msg: "Faire un git pull depuis main", exact: /^git pull( origin main)?$/ },
];

function handleAddFileForLevel(cmd, expectedFile, branch, level) {
    if (gitState.level === level && gitState.currentBranch === branch &&
        (cmd === `git add ${expectedFile}` || cmd === "git add .")) {

        if (!modifiedFiles.includes(expectedFile)) {
            printTerminal(`Erreur : ${expectedFile} n'a pas été modifié.`, "error");
            return true;
        }

        if (!stagedFiles.includes(expectedFile)) stagedFiles.push(expectedFile);
        advanceLevel();
        return true;
    }
    return false;
}

function levelMatch(cmd) {
    const expected = levels[gitState.level - 1].exact;
    if (expected instanceof RegExp) return expected.test(cmd);
    if (typeof expected === "string" && expected.startsWith("git push -u origin")) {
        const parts = cmd.trim().split(" ").filter(Boolean);
        return parts.length === 5 &&
               parts[0] === "git" &&
               parts[1] === "push" &&
               parts[2] === "-u" &&
               parts[3] === "origin" &&
               parts[4].length > 0;
    }
    return cmd.trim() === expected;
}

function printTerminal(msg, type = "default") {

    const span = document.createElement("span");

    switch (type) {
        case "level":
            span.style.color = "yellow";
            break;
        case "note":
            span.style.color = "orange";
            break;
        case "error":
            span.style.color = "red";
            break;
        case "command":
            span.style.color = "white";
            span.style.fontWeight = "bold";
            break;
        case "local":
            span.style.color = "blue";
            break;
        case "inherited":
            span.style.color = "violet";
            break;
        default:
            span.style.color = "white";
    }

    span.textContent = msg;
    terminalOutput.appendChild(span);
    terminalOutput.appendChild(document.createElement("br"));
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function clearModifiedMarks(node) {
    if (!node) return;

    if (node._modified)
        delete node._modified;

    if (node.children) {
        for (let child of node.children) {
            clearModifiedMarks(child);
        }
    }
}

function handleCommit(command) {
    const regex = /^git commit -m\s+"(.+)"$/;
    const match = command.match(regex);
    if (!match) {
        printTerminal(`Erreur : syntaxe exacte requise : git commit -m "message"`, "error");
        return;
    }
    const message = match[1];
    if (!stagedFiles.length) {
        printTerminal(`Erreur : Aucun fichier ajouté`, "error");
        return;
    }
    commitFiles(message);
}



function renderRemote() {
            
    deleteRemoteBranchBtn.style.display = "block";
    renderCompareLocalRemote();
    renderDeleteRemoteBranch();

    if (!remoteBranchesContainer) return;
    remoteBranchesContainer.innerHTML = "";

    const targetBranch = currentRemoteBranch;

    const divPR = document.createElement("div");
    divPR.classList.add("remote-branch");

    divPR.textContent = `New Pull Request :`;

    const select = document.createElement("select");
    select.innerHTML = `<option value="">-- choisir une branche --</option>` +
        Object.keys(gitState.remoteBranches)
            .filter(b => b !== targetBranch)
            .map(b => `<option value="${b}">${b}</option>`)
            .join("");

    const btn = document.createElement("button");
    btn.textContent = "Créer pull request";
    btn.onclick = () => {
        const sourceBranch = select.value;
        if (!sourceBranch) {
            printTerminal("Veuillez sélectionner une branche à merger", "note");
            return;
        }
        mergeBranch(`${sourceBranch}→${targetBranch}`);
    };

    divPR.appendChild(select);
    divPR.appendChild(btn);

    remoteBranchesContainer.appendChild(divPR);
}

function renderCompareLocalRemote() {

    if (!statusContainer) return;
    statusContainer.innerHTML = "";

    const localBranch = gitState.currentBranch;
    const remoteBranch = gitState.branchUpstreams[gitState.currentBranch];

    const div = document.createElement("div");
    div.classList.add("local-branch");

    if (gitState.branches[localBranch] === undefined) {
        div.textContent = `Info branche ${localBranch} - branche locale supprimée`;
        div.style.color = "grey";
    } else if (!remoteBranch) {
        div.textContent = `Info branche ${localBranch} : pas encore de branche distante suivie`;
    } else {
        let local = gitState.branches[localBranch]?.length || 0;

        let remote = gitState.remoteBranches[remoteBranch]?.length || 0;
        let status =
            local > remote ? "branche locale en avance" :
                local < remote ? "branche locale en retard" : "à jour";

        div.textContent = `Info branche ${localBranch} (local ${local} / remote ${remote}) - ${status} `;
    }

    statusContainer.appendChild(div);
}

function findNodeByName(node, name) {
    if (!node) return null;
    if (node.type === 'file' && node.name === name) return node;
    if (node.children) {
        for (let child of node.children) {
            const found = findNodeByName(child, name);
            if (found) return found;
        }
    }
    return null;
}

function markFileModifiedInBranch(branch, filename) {
    const snapshot = gitState.branchFiles[branch];
    if (!snapshot) return;
    const node = findNodeByName(snapshot, filename);
    if (node) node._modified = true;
}

function clearModifiedMarks(snapshot) {
    if (!snapshot) return;
    function walk(node) {
        if (node._modified) delete node._modified;
        if (node.children) node.children.forEach(walk);
    }
    walk(snapshot);
}

function endGame() {
    const mainContainer = document.querySelector("#container");
    const endGameContainer = document.querySelector("#end-game");
    mainContainer.style.display = "none";
    githubPanel.style.display = "none";
    endGameContainer.style.display = "block";
}

function partTwo() {
    const baseBranch = gitState.branchUpstreams["dev"];
    const newBranchFeature = 'feature/update-array';
    const newBranchDesign = 'design/new-header';

    gitState.remoteBranches[newBranchFeature] = deepCopy(gitState.remoteBranches[baseBranch] || []);

    gitState.remoteBranchFiles[newBranchFeature] = deepCopy(gitState.remoteBranchFiles[baseBranch] || deepCopy(projectTemplate));

    const assetsFolder = gitState.remoteBranchFiles[newBranchFeature].children[1];
    const jsFolder = assetsFolder.children[1];

    if (jsFolder && jsFolder.type === 'folder') {
        jsFolder.children.push({
            name: 'newarray.js',
            type: 'file',
            content: "// nouveau fichier ajouté par le collègue",
            _modified: false
        });
    }

    gitState.remoteBranches[newBranchFeature].push("feature: add array for loop (colleague)",
    "test: array img added (colleague)");


    renderRemote();
    renderRemoteButtons();
    renderRemoteProject();
    renderRemoteCommits();
    renderRemoteStatus();
    renderBranchCompareButtons();

    printTerminal(`Votre collègue est rentré de vacances, il a terminé une nouvelle fonctionnalité, sur une branche '${newBranchFeature}', qu'il a poussé sur Github/Gitlab, avec de nouveaux commits et un nouveau fichier newarray.js`, "note");
    printTerminal(`Il a aussi demandé une pull request de votre part, pour pouvoir merger sa branche distante '${newBranchFeature}' et la branche remote de développement`, "note");

    acceptPRBtn.textContent = `Acceptez la Pull Request entre '${newBranchFeature}' et la branche '${baseBranch}' ?`;
    acceptPRBtn.style.display = "block";

    advanceLevel();

    acceptPRBtn.addEventListener("click", function() {
        printTerminal(`Pull request acceptée pour ${newBranchFeature} → ${baseBranch} !`, "note");

        gitState.remoteBranches[baseBranch] = deepCopy(gitState.remoteBranches[newBranchFeature]);
        gitState.remoteBranchFiles[baseBranch] = deepCopy(gitState.remoteBranchFiles[newBranchFeature]);

        acceptPRBtn.style.display = "none";

        gitState.remoteBranches[newBranchDesign] = deepCopy(gitState.remoteBranches[newBranchFeature]);
        gitState.remoteBranchFiles[newBranchDesign] = deepCopy(gitState.remoteBranchFiles[newBranchFeature]);
        gitState.remoteBranches[newBranchDesign].push("design: new redirection links added with new style");


        renderRemote();
        renderRemoteButtons();
        renderRemoteProject();
        renderRemoteCommits();
        renderRemoteStatus();
        renderBranchCompareButtons();

        printTerminal(`Vous remarquez que votre collègue a également laissé un post-it sur votre bureau : il a commencé à travailler sur une nouvelle fonctionnalité dans la branche distante 'design/new-header' qu'il a poussé sur Github/Gitlab`, "note");
        printTerminal(`Génial, mais apparemment, il repart une nouvelle fois en vacances, c'est donc à vous de vous occuper de cette nouvelle branche maintenant...`, "note");
        advanceLevel();
    })
    
}



function renderBranches() {
    branchesContainer.innerHTML = "";
    for (let branch in gitState.branches) {
        const div = document.createElement("div");
        div.classList.add("branch");

        if (branch === "main") div.classList.add("main");
        else if (branch.startsWith("dev")) div.classList.add("dev");
        else div.classList.add("feature");

        if (branch === gitState.currentBranch) div.classList.add("current");

        div.innerHTML = `${branch} : `;

        gitState.branches[branch].forEach(commit => {
            const span = document.createElement("span");
            span.textContent = "● ";

            let origin = null;

            for (let b in gitState.branchOwnCommits) {
                if (gitState.branchOwnCommits[b]?.includes(commit)) {
                    origin = b;
                    break;
                }
            }

            if (origin === "main") span.style.color = "#ff7700";
            else if (origin?.startsWith("dev")) span.style.color = "#00d42e";
            else if (origin) span.style.color = "#ff3c84";
            else span.style.color = "#00ad9eff";

            div.appendChild(span);

        });

        if (branch === gitState.currentBranch) {
            const headSpan = document.createElement("span");
            headSpan.textContent = "(HEAD)";
            headSpan.style.color = "yellow";
            div.appendChild(headSpan);
        }

        branchesContainer.appendChild(div);
    }
}

function renderProject(node, container, depth = 0) {
    const indent = depth * 20;

    node.children?.forEach(child => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("tree-item");
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.marginLeft = indent + "px";

        const div = document.createElement("div");
        div.textContent = child.name;
        div.classList.add(child.type);
        div.style.cursor = "pointer";

        wrapper.appendChild(div);
        container.appendChild(wrapper);

        if (child.type === 'file') {
            div.addEventListener("click", () => {
                if (modifyBtn.parentElement === wrapper) {
                    modifyBtn.style.display = "none";
                    if (modifyBtn.parentElement) modifyBtn.parentElement.removeChild(modifyBtn);
                    projectTreeContainer.appendChild(modifyBtn);
                    selectedFile = null;
                } else {
                    if (modifyBtn.parentElement) {
                        modifyBtn.style.display = "none";
                        modifyBtn.parentElement.removeChild(modifyBtn);
                    }
                    modifyBtn.style.display = "inline-block";
                    wrapper.appendChild(modifyBtn);
                    selectedFile = child.name;
                }
            });
        } else {
            let expanded = true;
            div.style.fontWeight = 'bold';
            div.addEventListener('click', () => {
                expanded = !expanded;
                const next = wrapper.nextSibling;
                if (next) {
                    next.style.display = expanded ? 'block' : 'none';
                }
            });
        }

        if (child.type === "folder") {
            const sub = document.createElement("div");
            container.appendChild(sub);
            renderProject(child, sub, depth + 1);
        }
    });
}

function renderRemoteProject() {
    remoteTree.innerHTML = "";
    const branch = gitState.remoteBranchFiles[currentRemoteBranch];
    if (!branch) {
        remoteTree.innerHTML = "<i>Aucun contenu sur cette branche</i>";
        return;
    }

    function renderRemote(node, container, depth = 0) {
        const indent = depth * 20;

        node.children?.forEach(child => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("tree-item");
            wrapper.style.display = "flex";
            wrapper.style.alignItems = "center";
            wrapper.style.marginLeft = indent + "px";

            const div = document.createElement("div");
            div.textContent = child.name;
            div.classList.add(child.type);
            div.style.cursor = "default";

            wrapper.appendChild(div);
            container.appendChild(wrapper);

            if (child.type === "folder") {
                const sub = document.createElement("div");
                container.appendChild(sub);
                renderRemote(child, sub, depth + 1);
            }
        });
    }

    renderRemote(branch, remoteTree);
}


function renderRemoteCommits() {
    const commits = gitState.remoteBranches[currentRemoteBranch] || [];

    if (commits.length === 0) {
        remoteCommits.innerHTML = "<i>Aucun commit</i>";
        return;
    }

    remoteCommits.innerHTML = commits.map(c => "● " + c).join("<br>");
}

function compareBranchesRemote(base, target) {
    const baseRemote = gitState.remoteBranches[base] || [];
    const targetRemote = gitState.remoteBranches[target] || [];

    const ahead = baseRemote.filter(c => !targetRemote.includes(c)).length;

    const behind = targetRemote.filter(c => !baseRemote.includes(c)).length;

    return { ahead, behind };
}


function renderBranchCompareButtons() {
    remoteBranchesBtnContainer.innerHTML = "";

    const otherBranches = Object.keys(gitState.remoteBranches).filter(b => b !== currentRemoteBranch);


    if (otherBranches.length === 0) return;

    const title = document.createElement("h4");
    title.textContent = "Comparer avec :";
    remoteBranchesBtnContainer.appendChild(title);

    otherBranches.forEach(branch => {
        const btn = document.createElement("button");
        btn.textContent = branch;

        btn.classList.add("btn-compare");

        if (branch === selectedCompareTarget) btn.classList.add("active");

        btn.onclick = () => {
            selectedCompareTarget = branch;
            renderBranchCompareButtons();
            renderRemoteStatus();
        };

        remoteBranchesBtnContainer.appendChild(btn);
    });
}

function renderRemoteStatus() {
    const base = currentRemoteBranch;
    let target = selectedCompareTarget;

    if (!gitState.remoteBranches[base] || !gitState.remoteBranches[target]) {
        remoteStatus.textContent = "—";
        return;
    }

    if (base === target) target = "main";

    const { ahead, behind } = compareBranchesRemote(base, target);

    let msg;
    if (ahead === 0 && behind === 0 && base === "main" && target === "main") msg = `---`;
    else if (ahead === 0 && behind === 0) msg = `This branch is up to date with ${target}`;
    else if (ahead > 0 && behind === 0) msg = `This branch is ${ahead} commit(s) ahead of ${target}`;
    else if (ahead === 0 && behind > 0) msg = `This branch is ${behind} commit(s) behind ${target}`;
    else msg = `This branch is ${ahead} commit(s) ahead and ${behind} behind ${target}`;

    remoteStatus.textContent = msg;
}

function renderDeleteRemoteBranch() {
    deleteRemoteBranchBtn.textContent = `Supprimer branche remote ${currentRemoteBranch} ?`
    deleteRemoteBranchBtn.onclick = () => {
        if (currentRemoteBranch === "main") {
            deleteRemoteBranchMsg.style.display = "block";
            deleteRemoteBranchMsg.textContent = "Vous ne pouvez supprimer la branche origin/main du dépôt initial.";
            setTimeout(() => {
                deleteRemoteBranchMsg.textContent = "";
            }, 5000);
            printTerminal(`Erreur : Vous ne pouvez supprimer la branche origin/main du dépôt initial`, "error");
            return
        }

        Object.entries(gitState.branchUpstreams).forEach(([localBranch, remoteBranch]) => {
            if (remoteBranch === currentRemoteBranch) {
                delete gitState.branchUpstreams[localBranch];
            }
        });

        const remoteBranchBtns = document.querySelectorAll(".remote-branch-btn");
        remoteBranchBtns.forEach(btn => {
            if (btn.textContent === currentRemoteBranch) {
                btn.remove();
            }
        })

        delete gitState.remoteBranches[currentRemoteBranch];
        delete gitState.remoteBranchFiles[currentRemoteBranch];

        currentRemoteBranch = "main";

        renderBranches();
        renderRemote();
        renderRemoteButtons();
        renderRemoteProject();
        renderRemoteCommits();
        renderRemoteStatus();
        renderBranchCompareButtons();

    }
}



function renderRemoteButtons() {
    remoteButtons.innerHTML = "";

    for (let branch in gitState.remoteBranches) {
        const btn = document.createElement("button");
        btn.textContent = branch;
        btn.classList.add("remote-branch-btn");

        if (branch === currentRemoteBranch)
            btn.classList.add("active");

        btn.onclick = () => {
            currentRemoteBranch = branch;
            renderRemote();
            renderRemoteButtons();
            renderRemoteProject();
            renderRemoteCommits();
            renderRemoteStatus();
            renderBranchCompareButtons();
        };

        remoteButtons.appendChild(btn);
    }
}

function mergeBranch(commandOrBranch) {
    let source, target;

    if (commandOrBranch.includes("→")) {
        const parts = commandOrBranch.split("→");
        source = parts[0];
        target = parts[1];
    } else {
        source = commandOrBranch;
        target = 'main';
    }

    if (!gitState.remoteBranches[source] || !gitState.remoteBranches[target]) {
        printTerminal(`Erreur : branche distante introuvable (${source} ou ${target})`, "error");
        return;
    }

    const merged = [...gitState.remoteBranches[target]];
    for (let c of gitState.remoteBranches[source]) {
        if (!merged.includes(c)) merged.push(c);
    }
    gitState.remoteBranches[target] = merged;

    gitState.remoteBranchFiles[target] = deepCopy(gitState.remoteBranchFiles[source]);

    printTerminal(`Pull request mergée pour ${source} → ${target} !`, "note");

    renderRemote();
    renderRemoteButtons();
    renderRemoteProject();
    renderRemoteCommits();
    renderRemoteStatus();
    renderBranchCompareButtons();

    const sourceLocal = Object.keys(gitState.branchUpstreams).find(
        local => gitState.branchUpstreams[local] === source
    ) || source;

    const targetLocal = Object.keys(gitState.branchUpstreams).find(
        local => gitState.branchUpstreams[local] === target
    ) || target;

    if (gitState.level === 11 && sourceLocal === "feature/login" && targetLocal === "dev") advanceLevel();
    if (gitState.level === 24 && sourceLocal === "feature/signup" && targetLocal === "dev") advanceLevel();
    if (gitState.level === 27 && sourceLocal === "dev" && targetLocal === "main") advanceLevel();
    if (gitState.level === 39 && gitState.branchUpstreams[sourceLocal] === "design/new-header" && targetLocal === "dev") advanceLevel();
    if (gitState.level === 42 && sourceLocal === "dev" && targetLocal === "main") advanceLevel();
}

function advanceLevel() {
    gitState.level++;
    if (gitState.level <= levels.length) {
        printTerminal(`Niveau ${gitState.level} : ${levels[gitState.level - 1].msg}`, "level");
    }
}

function handleCommand(cmdRaw) {
    const cmd = (cmdRaw || "").trim();
    if (!cmd) return;

    printTerminal(`$ ${cmd}`, "command");
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    const lvl = gitState.level;

    if (cmd.startsWith("MERGE")) {
        mergeBranch(cmd);
        return;
    }

    if (cmd === "MODIFY_INDEX") {
        const files = ["index.html"];
        for (let f of files) {
            const node = findNodeByName(gitState.branchFiles[gitState.currentBranch], f);
            if (node) {
                node._modified = true;
                if (!modifiedFiles.includes(f)) modifiedFiles.push(f);
            }
        }
        printTerminal("index.html modifié !", "note");
        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);

        if (gitState.level === 7 && gitState.currentBranch === "feature/login" && modifiedFiles.includes("index.html")) {
            advanceLevel();
        }

        if (gitState.level === 21 && gitState.currentBranch === "feature/signup" && modifiedFiles.includes("index.html")) {
            advanceLevel();
        }

        if (gitState.level === 34 && modifiedFiles.includes("index.html")) {
            advanceLevel();
        }

        return;
    }


    if (cmd === "MODIFY_SCRIPT") {
        const node = findNodeByName(gitState.branchFiles[gitState.currentBranch], "script.js");
        if (node) {
            node._modified = true;
            if (!modifiedFiles.includes("script.js")) modifiedFiles.push("script.js");
            printTerminal("script.js modifié !", "note");
            projectTreeContainer.innerHTML = "";
            renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);

            if (gitState.level === 15 && gitState.currentBranch === "feature/signup" && modifiedFiles.includes("script.js")) advanceLevel();
        }
        return;
    }

    if (cmd === "MODIFY_STYLE") {
        const node = findNodeByName(gitState.branchFiles[gitState.currentBranch], "style.css");
        if (node) {
            node._modified = true;
            if (!modifiedFiles.includes("style.css")) modifiedFiles.push("style.css");
            printTerminal("style.css modifié !", "note");
            projectTreeContainer.innerHTML = "";
            renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);

            if (gitState.level === 18 && gitState.currentBranch === "feature/signup" && modifiedFiles.includes("style.css")) advanceLevel();
            if (gitState.level === 35 && modifiedFiles.includes("style.css")) advanceLevel();
        }
        return;
    }

    // --- git clone ---
    if (cmd.startsWith("git clone")) {
        const parts = cmd.split(" ");
        const url = parts[2];
        const expectedUrl = "https://gitlab.com/CodePhenix/ProjetPhenix.git";

        if (!url) {
            printTerminal("fatal: repository '' does not exist", "error");
            return;
        }

        if (url !== expectedUrl) {
            printTerminal(`fatal: repository '${url}' does not exist`, "error");
            return;
        }

        gitState.cloned = true;
        gitState.branches = { main: [] };
        gitState.currentBranch = "main";
        gitState.branchFiles = { main: deepCopy(projectTemplate) };

        gitState.remoteBranches = { main: [] };
        gitState.remoteBranchFiles = { main: deepCopy(projectTemplate) };

        printTerminal("Cloning into 'ProjetPhenix'...", "note");
        printTerminal(`Dépôt cloné depuis ${url}`, "note");

        rightPanel.style.display = "block";
        githubPanel.style.display = "block";
        branchesPanel.style.display = "block";

        repoUrlDisplay.textContent = url;

        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);

        if (lvl === 1 && levelMatch(cmd)) advanceLevel();
        renderBranches();
        renderRemote();
        renderRemoteButtons();
        renderRemoteProject();
        renderRemoteCommits();
        renderRemoteStatus();
        renderBranchCompareButtons();
        return;
    }

    if (!gitState.cloned) {
        printTerminal(`Commande inconnue : ${cmd}`, "error");
        return;
    }

    // --- git add ---
    if (cmd.startsWith("git add")) {
        if (handleAddFileForLevel(cmd, "index.html", "feature/login", 8)) return;
        if (handleAddFileForLevel(cmd, "script.js", "feature/signup", 16)) return;
        if (handleAddFileForLevel(cmd, "style.css", "feature/signup", 18)) return;

        if (cmd === "git add .") {
            for (let f of modifiedFiles) {
                if (!stagedFiles.includes(f)) stagedFiles.push(f);
            }
        } else {
            const parts = cmd.split(" ");
            const target = parts.slice(2).join(" ");
            if (target) {
                if (target === '.') {
                } else {
                    if (modifiedFiles.includes(target)) {
                        if (!stagedFiles.includes(target)) stagedFiles.push(target);
                    } else {
                        printTerminal(`warning: fichier '${target}' non modifié ou introuvable`, "error");
                    }
                }
            }
        }

        printTerminal(`Index : ${stagedFiles.join(", ") || "vide"}`, "note");

        if (gitState.level === 36) advanceLevel(); 

        return;
    }

    // --- git commit ---
    if (cmd.startsWith("git commit")) {
        const regex = /^git commit\s+-m\s+"(.+)"$/;
        const match = cmd.match(regex);

        if (!match) {
            printTerminal('Erreur : syntaxe exacte requise : git commit -m "message"', "error");
            return;
        }

        const msg = match[1];

        if (!stagedFiles.length) {
            printTerminal("Erreur : Aucun fichier ajouté", "error");
            return;
        } else {
            gitState.branches[gitState.currentBranch].push(msg);
            if (!gitState.branchOwnCommits[gitState.currentBranch]) gitState.branchOwnCommits[gitState.currentBranch] = [];
            gitState.branchOwnCommits[gitState.currentBranch].push(msg);

            const snapshot = gitState.branchFiles[gitState.currentBranch];
            for (let f of stagedFiles) {
                const node = findNodeByName(snapshot, f);
                if (node && node._modified) delete node._modified;
            }

            printTerminal(`Commit : "${msg}"`, "note");

            stagedFiles = [];

            modifiedFiles = modifiedFiles.filter(f => {

                const node = findNodeByName(gitState.branchFiles[gitState.currentBranch], f);
                return node && node._modified;
            });

            if ((lvl === 3 || lvl === 9 || lvl === 17 || lvl === 19 || lvl === 22|| lvl === 37) && levelMatch(cmd)) advanceLevel();
        }

        renderBranches();
        renderRemote();
        renderRemoteButtons();
        renderRemoteProject();
        renderRemoteCommits();
        renderRemoteStatus();

        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);
        return;
    }

    // --- git branch ---
    if (cmd.startsWith("git branch")) {
        const parts = cmd.split(" ").filter(Boolean);

        if (parts.length === 2) {
            printTerminal("Branches locales : " + Object.keys(gitState.branches).map(b => {
                return b === gitState.currentBranch ? b + " (HEAD)" : b;
            }).join(", "), "note");
            return;
        }

        if (parts.length === 3 && parts[2] !== '-m' && !["-r", "-vv", "-d", "-D"].includes(parts[2])) {
            const branch = parts[2];
            if (gitState.branches[branch]) {
                printTerminal(`Erreur : branche ${branch} existe déjà`, "error");
                return;
            }

            gitState.branches[branch] = deepCopy(gitState.branches[gitState.currentBranch] || []);
            gitState.branchFiles[branch] = deepCopy(gitState.branchFiles[gitState.currentBranch] || deepCopy(projectTemplate));
            gitState.branchOwnCommits[branch] = [];



            printTerminal(`Branche ${branch} créée`, "note");

            if (gitState.level === 2 && branch === 'dev' || gitState.level === 14 && branch === 'feature/signup') {
                printTerminal(`Branche ${branch} créée, utilisez 'git checkout' avec le nom de la branche pour vous positionner dessus.`, "note");
            }

            if (gitState.level === 4 && branch === 'login-feature') advanceLevel();

            renderBranches();
            return;
        }

        // git branch -m [old] new
        if (parts[2] === '-m') {
            let oldName, newName;
            if (parts.length === 4) {
                oldName = gitState.currentBranch;
                newName = parts[3];
            } else if (parts.length === 5) {
                oldName = parts[3];
                newName = parts[4];
            } else {
                printTerminal("Erreur: le bon usage est  'git branch -m <old> <new>", "error");
                return;
            }

            if (!gitState.branches[oldName]) {
                printTerminal("Erreur : branche à renommer inconnue", "error");
                return;
            }

            gitState.branches[newName] = gitState.branches[oldName];
            delete gitState.branches[oldName];

            gitState.branchFiles[newName] = gitState.branchFiles[oldName];
            delete gitState.branchFiles[oldName];

            gitState.branchOwnCommits[newName] = gitState.branchOwnCommits[oldName] || [];
            delete gitState.branchOwnCommits[oldName];

            if (gitState.currentBranch === oldName) gitState.currentBranch = newName;

            printTerminal(`Branche renommée en ${newName}`, "note");
            renderBranches();
            projectTreeContainer.innerHTML = "";
            renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);

            if (gitState.level === 6 && newName === 'feature/login') advanceLevel();
            return;
        }

        if (cmd.startsWith("git branch -d") || cmd.startsWith("git branch -D")) {
            const force = cmd.startsWith("git branch -D");
            const branch = cmd.replace(force ? "git branch -D" : "git branch -d", "").trim();

            if (!gitState.branches[branch]) {
                printTerminal(`Erreur : branche inconnue`, "error");
                return;
            }
            if (gitState.currentBranch === branch) {
                printTerminal(`Erreur : impossible de supprimer la branche courante (${branch})`, "error");
                return;
            }

            if (!force) {
                const branchCommits = gitState.branches[branch] || [];
                const currentCommits = gitState.branches[gitState.currentBranch] || [];
                const remoteCommits = gitState.remoteBranches[branch] || [];

                const unmerged = branchCommits.filter(c => !currentCommits.includes(c) && !remoteCommits.includes(c));

                if (unmerged.length) {
                    printTerminal(`Erreur : branche non fusionnée ou non poussée, commits non inclus : ${unmerged.join(", ")}`, "error");
                    return;
                }
            }

            delete gitState.branches[branch];
            delete gitState.branchFiles[branch];
            printTerminal(`Branche ${branch} supprimée`, "note");

            if (lvl === 13 && branch === "feature/login") advanceLevel();
            if (lvl === 26 && branch === "feature/signup") advanceLevel();
            if (lvl === 41 && gitState.branchUpstreams[branch] === "design/new-header") advanceLevel();

            renderBranches();
            return;
        }


        if (cmd === "git branch -r") {
            //const remotes = Object.keys(fetchedBranches);
            const remotes = Object.keys(gitState.remoteBranches);
            if (!remotes.length) {
                printTerminal("Aucune branche distante connue (fetch requis)", "note");
            } else {
                remotes.forEach(branch => {
                    printTerminal(`origin/${branch}`, "note");
                });
            }
            return;
        }

        if (cmd === "git branch -vv") {
            for (let branch in gitState.branches) {

                const localCommits = gitState.branches[branch];
                const upstream = gitState.branchUpstreams[branch];
                const lastCommit = localCommits.slice(-1)[0] || "aucun commit";

                let status = "[pas de suivi distant]";

                if (upstream && gitState.remoteBranches[upstream]) {
                    const remoteCommits = fetchedBranches[upstream]?.commits || gitState.remoteBranches[upstream];

                    const ahead = localCommits.filter(c => !remoteCommits.includes(c)).length;
                    const behind = remoteCommits.filter(c => !localCommits.includes(c)).length;

                    if (ahead === 0 && behind === 0)
                        status = `[origin/${upstream}]`;
                    else if (ahead > 0 && behind === 0)
                        status = `[origin/${upstream}: ${ahead} en avance]`;
                    else if (ahead === 0 && behind > 0)
                        status = `[origin/${upstream}: ${behind} en retard]`;
                    else
                        status = `[origin/${upstream}: ${ahead}↑ ${behind}↓]`;
                }

                const headMark = branch === gitState.currentBranch ? "*" : " ";
                printTerminal(`${headMark} ${branch} ${status} (${lastCommit})`, "note");
            }
            return;
        }



        printTerminal(`Commande inconnue : ${cmd}`, "error");
        return;
    }

    // --- git checkout -b localBranch origin/remoteBranch
    if (cmd.startsWith("git checkout -b") && cmd.includes("origin/")) {

        const parts = cmd.split(" ").filter(Boolean);

        const localBranch = parts[3];
        const remoteRef = parts[4];
        const remoteBranch = remoteRef.slice("origin/".length);

        if (!localBranch || !remoteBranch) {
            printTerminal("Erreur : syntaxe invalide. Usage : git checkout -b <nouvelle> origin/<distante>", "error");
            return;
        }

        if (gitState.branches[localBranch]) {
            printTerminal(`Erreur : la branche ${localBranch} existe déjà`, "error");
            return;
        }

        if (!gitState.remoteBranches[remoteBranch]) {
            printTerminal(`Erreur : la branche distante origin/${remoteBranch} n'existe pas`, "error");
            return;
        }


        if (fetchedBranches[remoteBranch]) {

            gitState.branchUpstreams[localBranch] = remoteBranch;

            gitState.branches[localBranch] = deepCopy(fetchedBranches[remoteBranch].commits);
            gitState.branchFiles[localBranch] = deepCopy(fetchedBranches[remoteBranch].files);
            gitState.branchOwnCommits[localBranch] = [];

            printTerminal(`Nouvelle branche ${localBranch} créée depuis origin/${remoteBranch} (données à jour)`, "note");
        }

        else {

            gitState.branchUpstreams[localBranch] = remoteBranch;

            gitState.branches[localBranch] = [];
            gitState.branchFiles[localBranch] = deepCopy(projectTemplate);
            gitState.branchOwnCommits[localBranch] = [];

            printTerminal(`Nouvelle branche ${localBranch} créée : aucune donnée distante disponible (jamais fetch)`, "note");
        }

        gitState.currentBranch = localBranch;

        renderBranches();
        renderCompareLocalRemote();
        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[localBranch], projectTreeContainer);

        if (gitState.level === 33 && remoteBranch === "design/new-header") advanceLevel();

        return;
    }

    // --- git checkout -b <branch>
    if (cmd.startsWith("git checkout -b")) {
        const parts = cmd.split(" ");
        const branch = parts[3];
        if (!branch) {
            printTerminal("Erreur: nom de branche manquant", "error");
            return;
        }
        if (gitState.branches[branch]) {
            printTerminal(`Erreur: branche ${branch} existe déjà`, "error");
            return;
        }

        gitState.branches[branch] = deepCopy(gitState.branches[gitState.currentBranch] || []);
        gitState.branchFiles[branch] = deepCopy(gitState.branchFiles[gitState.currentBranch] || deepCopy(projectTemplate));
        gitState.branchOwnCommits[branch] = [];




        gitState.currentBranch = branch;
        printTerminal(`Branche ${branch} créée et déplacement dessus`, "note");

        if (gitState.level === 2 && branch === 'dev') advanceLevel();

        if (gitState.level === 4 && branch === 'login-feature') advanceLevel();
        if (gitState.level === 5) advanceLevel();

        if (gitState.level === 14 && branch === 'feature/signup') advanceLevel();

        renderCompareLocalRemote();
        renderBranches();
        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);
        return;
    }


    // --- git checkout <branch>
    if (cmd.startsWith("git checkout") && !cmd.includes("-b")) {
        const parts = cmd.split(" ");
        const branch = parts[2];
        if (!gitState.branches[branch]) {
            printTerminal(`Erreur : branche inconnue`, "error");
            return;
        }
        gitState.currentBranch = branch;
        printTerminal(`Changé vers ${branch}`, "note");

        if (gitState.level === 2 && branch === 'dev') advanceLevel();

        if (gitState.level === 5 && levelMatch(cmd)) advanceLevel();

        if (gitState.level === 14 && branch === 'feature/signup') advanceLevel();

        if (gitState.level === 28 && branch === 'main') advanceLevel();

        if (gitState.level === 43 && branch === 'main') advanceLevel();

        renderCompareLocalRemote();
        renderBranches();
        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);
        return;
    }

    // --- git merge <branch>  /  git merge origin/<branch>
    if (cmd.startsWith("git merge ")) {
        const parts = cmd.split(" ").filter(Boolean);
        const arg = parts[2];

        if (!arg) {
            printTerminal("Erreur : aucune branche à merger", "error");
            return;
        }

        const current = gitState.currentBranch;
        let sourceBranch = null;
        let isRemote = false;

        if (arg.startsWith("origin/")) {
            isRemote = true;
            sourceBranch = arg.slice("origin/".length);

            if (!gitState.remoteBranches[sourceBranch]) {
                printTerminal(`Erreur : la branche distante origin/${sourceBranch} n'existe pas`, "error");
                return;
            }

            if (!fetchedBranches[sourceBranch]) {
                printTerminal(`Attention : aucune mise à jour récente de origin/${sourceBranch} (pas de fetch). Merge depuis données locales distantes.`, "note");
            }
        }
        else {
            sourceBranch = arg;
            if (!gitState.branches[sourceBranch]) {
                printTerminal(`Erreur : la branche ${sourceBranch} n'existe pas`, "error");
                return;
            }
        }

        printTerminal(`Fusion de ${isRemote ? "origin/" : ""}${sourceBranch} dans ${current}...`, "note");

        let sourceCommits = [];
        let sourceFiles = [];

        if (isRemote) {
            if (fetchedBranches[sourceBranch]) {
                sourceCommits = deepCopy(fetchedBranches[sourceBranch].commits);
                sourceFiles = deepCopy(fetchedBranches[sourceBranch].files);
            } else {
                sourceCommits = [];
                sourceFiles = deepCopy(projectTemplate);
            }
        } else {
            sourceCommits = deepCopy(gitState.branches[sourceBranch]);
            sourceFiles = deepCopy(gitState.branchFiles[sourceBranch]);
        }

        const targetCommits = gitState.branches[current] || [];

        
        const sourceHasNewCommits = sourceCommits.some(c => !targetCommits.includes(c));
        if (!sourceHasNewCommits) {
            printTerminal("Already up to date.", "note");
            return;
        }

        const mergedCommits = [...targetCommits];

        sourceCommits.forEach(c => {
            if (!mergedCommits.includes(c)) mergedCommits.push(c);
        });

        gitState.branches[current] = mergedCommits;

        gitState.branchFiles[current] = deepCopy(sourceFiles);

        clearModifiedMarks(gitState.branchFiles[current]);
        modifiedFiles = [];

        printTerminal(`Merge terminé : ${current} contient maintenant ${mergedCommits.length} commit(s).`, "note");

        renderBranches();
        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[current], projectTreeContainer);

        if ((gitState.level === 12 && current === "dev") || (gitState.level === 25 && current === "dev") || (gitState.level === 29 && current === "main") || (gitState.level === 31 && current === "dev") || (gitState.level === 44 && current === "main")) {
            if (isRemote) {
                const fetchedCommits = fetchedBranches[sourceBranch].commits;
                const fetchedFiles = fetchedBranches[sourceBranch].files;


                const remoteCommits = gitState.remoteBranches[sourceBranch];
                const remoteFiles = gitState.remoteBranchFiles[sourceBranch];

                if (fetchedCommits && fetchedFiles && remoteCommits && remoteFiles) {
                    const commitsMatch = JSON.stringify(fetchedCommits) === JSON.stringify(remoteCommits);
                    const filesMatch = JSON.stringify(fetchedFiles) === JSON.stringify(remoteFiles);

                    if (commitsMatch && filesMatch) {
                        printTerminal("Pull simulé correct : niveau validé", "note");
                        if (gitState.level === 29) partTwo();
                        else if (gitState.level === 33 && sourceBranch === "design/new-header") advanceLevel();
                        else if (gitState.level === 44) endGame();
                        else advanceLevel();
                    } else {
                        printTerminal("Fetch et merge non synchronisés avec remote", "error");
                    }
                } else {
                    printTerminal("Aucun fetch détecté pour la branche distante", "error");
                }
            }
        }

        return;
    }



    // --- git push ---
    /*if (cmd.startsWith("git push")) {
        const parts = cmd.split(" ").filter(Boolean);
        let branch = gitState.currentBranch;
        const isFirstPush = !gitState.remoteBranches[branch];

        if (isFirstPush) {

            if (
                parts.length !== 5 ||
                parts[0] !== "git" ||
                parts[1] !== "push" ||
                parts[2] !== "-u" ||
                parts[3] !== "origin" ||
                parts[4] !== branch
            ) {
                printTerminal(`fatal: Première mise à jour de ${branch} doit utiliser exactement :`, "error");
                printTerminal(`    git push -u origin ${branch}`, "error");
                return;
            }

            gitState.remoteBranches[branch] = deepCopy(gitState.branches[branch]);
            gitState.remoteBranchFiles[branch] = deepCopy(gitState.branchFiles[branch]);

            currentRemoteBranch = branch;

            printTerminal(`Push sur ${branch}`, "note");
            printTerminal(`Branche '${branch}' configurée pour suivre 'origin/${branch}'`, "note");
        } else {

            if (parts.length > 1 && parts[1] === "-u") {
                printTerminal(`warning: 'git push -u' inutile après premier push`, "note");
            }

            gitState.remoteBranches[branch] = deepCopy(gitState.branches[branch]);
            gitState.remoteBranchFiles[branch] = deepCopy(gitState.branchFiles[branch]);
            printTerminal(`Push sur ${branch}`, "note");
        }

        renderRemote();
        renderRemoteButtons();
        renderRemoteProject();
        renderRemoteCommits();
        renderRemoteStatus();
        renderBranchCompareButtons();

        if ((gitState.level === 3 || gitState.level === 10 || gitState.level === 15 || gitState.level === 20 || gitState.level === 23) && levelMatch(cmd)) advanceLevel();
        return;
    }*/

    if (cmd.startsWith("git push")) {
        const parts = cmd.split(" ").filter(Boolean);
        let branch = gitState.currentBranch;
        const isFirstPush = !gitState.branchUpstreams[branch];

        let targetBranch = branch;
        let setUpstream = false;

        if (parts.length === 2 && parts[0] === "git" && parts[1] === "push") {
            targetBranch = gitState.branchUpstreams[branch] || branch;
        } else if (
            parts.length === 4 &&
            parts[0] === "git" &&
            parts[1] === "push" &&
            parts[2] === "origin"
        ) {
            targetBranch = parts[3];
        } else if (
            parts.length === 5 &&
            parts[0] === "git" &&
            parts[1] === "push" &&
            parts[2] === "-u" &&
            parts[3] === "origin"
        ) {
            targetBranch = parts[4];
            setUpstream = true;
        } else {
            printTerminal("Erreur : syntaxe git push invalide ou branche inconnue", "error");
            return;
        }

        if (!gitState.branches[branch]) {
            printTerminal(`Erreur : la branche locale '${branch}' n'existe pas`, "error");
            return;
        }

        if (isFirstPush) {
            if (!(parts.length === 5 && parts[2] === "-u" && parts[3] === "origin")) {
                printTerminal(`fatal: Première mise à jour de ${branch} doit utiliser exactement :`, "error");
                printTerminal(`    git push -u origin <branch>`, "error");
                return;
            }

            // push les commits de la branche locale sur la branche distante targetBranch
            gitState.remoteBranches[targetBranch] = deepCopy(gitState.branches[branch]);
            gitState.remoteBranchFiles[targetBranch] = deepCopy(gitState.branchFiles[branch]);

            currentRemoteBranch = targetBranch;
            gitState.branchUpstreams[branch] = targetBranch;

            printTerminal(`Push sur ${targetBranch}`, "note");
            printTerminal(`Branche '${branch}' configurée pour suivre 'origin/${targetBranch}'`, "note");
        } else {
            // push les commits de la branche locale sur la branche distante targetBranch
            const isNewRemote = !gitState.remoteBranches[targetBranch];

            gitState.remoteBranches[targetBranch] = deepCopy(gitState.branches[branch]);
            gitState.remoteBranchFiles[targetBranch] = deepCopy(gitState.branchFiles[branch]);

            printTerminal(`Push sur ${targetBranch}`, "note");
            if (isNewRemote) {
                printTerminal(`Branche '${targetBranch}' créée sur le remote à partir de '${branch}'`, "note");
            }

            if (setUpstream) {
                currentRemoteBranch = targetBranch;
                gitState.branchUpstreams[branch] = targetBranch;
                printTerminal(`Branche '${branch}' configurée pour suivre 'origin/${targetBranch}'`, "note");

                if (targetBranch === branch && !isFirstPush) {
                    printTerminal(`warning: 'git push -u' inutile après premier push`, "note");
                }
            }
        }


        renderRemote();
        renderRemoteButtons();
        renderRemoteProject();
        renderRemoteCommits();
        renderRemoteStatus();
        renderBranchCompareButtons();

        //if ((gitState.level === 3 || gitState.level === 10 || gitState.level === 15 || gitState.level === 20 || gitState.level === 23) && levelMatch(cmd)) advanceLevel();
        if ([3, 10, 15, 20, 23, 38].includes(gitState.level) && levelMatch(cmd)) {
            advanceLevel();
        }
        return;
    }




    // --- git pull ---
    if (cmd.startsWith("git pull")) {
        const parts = cmd.split(" ").filter(Boolean);
        const localBranch = gitState.currentBranch;
        if (!gitState.branches[localBranch]) {
            printTerminal(`Erreur : branche locale introuvable (${localBranch})`, "error");
            return;
        }

        let remoteBranch;
        /*if (parts.length === 2 && parts[0] === "git" && parts[1] === "pull") {
            remoteBranch = localBranch;
        } else if (
            parts.length === 4 &&
            parts[0] === "git" &&
            parts[1] === "pull" &&
            parts[2] === "origin"
        ) {
            remoteBranch = parts[3];
        } else {
            printTerminal(`Commande pull invalide`, "error");
            return;
        }*/
        if (parts.length === 2 && parts[0] === "git" && parts[1] === "pull") {
            remoteBranch = gitState.branchUpstreams[localBranch];
            if (!remoteBranch) {
                printTerminal(`Erreur : aucune branche distante configurée pour ${localBranch}`, "error");
                return;
            }
        }


        const remoteCommits = gitState.remoteBranches[remoteBranch];
        if (!remoteCommits) {
            printTerminal(`Erreur : branche distante introuvable (${remoteBranch})`, "error");
            return;
        }

        const localCommits = gitState.branches[localBranch];

        for (let c of remoteCommits) {
            if (!localCommits.includes(c)) {
                localCommits.push(c);
            }
        }
        gitState.branches[localBranch] = localCommits;

        gitState.branchFiles[localBranch] = deepCopy(gitState.remoteBranchFiles[remoteBranch]);

        printTerminal(`Pull effectué depuis ${remoteBranch}`, "note");

        renderBranches();
        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[localBranch], projectTreeContainer);
        renderRemote();
        renderRemoteProject();
        renderRemoteCommits();
        renderRemoteStatus();

        if (gitState.level === 12 && localBranch === "dev" && levelMatch(cmd)) advanceLevel();
        if (gitState.level === 25 && localBranch === "dev" && levelMatch(cmd)) advanceLevel();
        if (gitState.level === 29 && localBranch === "main" && levelMatch(cmd)) partTwo();
        if (gitState.level === 31 && localBranch === "dev" && levelMatch(cmd)) advanceLevel();
        if (gitState.level === 40 && localBranch === "dev" && levelMatch(cmd)) advanceLevel();
        if (gitState.level === 44 && localBranch === "main" && levelMatch(cmd)) endGame();
        return;
    }


    // --- git log ---
    if (cmd === "git log") {
        const branch = gitState.currentBranch;

        const all = gitState.branches[branch] || [];
        const own = gitState.branchOwnCommits[branch] || [];

        if (all.length === 0) {
            printTerminal("Aucun commit sur cette branche.", "note");
            return;
        }

        printTerminal(`Log de la branche ${branch} :`, "note");

        all.forEach(commit => {
            const isOwn = own.includes(commit);
            const src = isOwn ? "(local)" : "(inherited)";
            printTerminal(`● ${commit} ${src}`, isOwn ? "local" : "inherited");
        });

        return;
    }

    // --- git log --all ---
    if (cmd === "git log --all") {
        printTerminal("Log de toutes les branches :", "note");
        for (let branch in gitState.branches) {
            const all = gitState.branches[branch] || [];
            const own = gitState.branchOwnCommits[branch] || [];
            all.forEach(commit => {
                const isOwn = own.includes(commit);
                const src = isOwn ? "(local)" : "(inherited)";
                printTerminal(`[${branch}] ● ${commit} ${src}`, isOwn ? "local" : "inherited");
            });
        }
        return;
    }

    // --- git status ---
    /*if (cmd === "git status") {
        const branch = gitState.currentBranch;
        printTerminal(`Branche : ${branch}`, "note");

        if (fetchedBranches[branch]) {
            const local = gitState.branches[branch] || [];
            const remote = fetchedBranches[branch].commits || [];

            const ahead = local.filter(c => !remote.includes(c)).length;
            const behind = remote.filter(c => !local.includes(c)).length;

            if (ahead === 0 && behind === 0) {
                printTerminal("Votre branche est à jour avec origin/" + branch, "note");
            } else if (ahead > 0 && behind === 0) {
                printTerminal(`Votre branche est en avance de ${ahead} commit(s) sur origin/${branch}`, "note");
            } else if (ahead === 0 && behind > 0) {
                printTerminal(`Votre branche est en retard de ${behind} commit(s) par rapport à origin/${branch}`, "note");
            } else {
                printTerminal(`Votre branche est en avance de ${ahead} et en retard de ${behind} commit(s)`, "note");
            }
        } else {
            printTerminal("Aucune donnée distante récente disponible (fetch requis pour suivre origin/" + branch + ")", "note");
        }

        printTerminal(`Index : ${stagedFiles.join(", ") || "vide"}`, "note");

        if (modifiedFiles.length) {
            printTerminal(`Modifiés : ${modifiedFiles.join(", ")}`, "note");
        } else {
            printTerminal("Modifiés : aucun", "note");
        }

        const commits = gitState.branchOwnCommits[branch] || [];
        printTerminal(`Derniers commits : ${commits.slice(-3).join(" | ") || "aucun"}`, "note");

        return;
    }*/

    if (cmd === "git status") {
        const branch = gitState.currentBranch;
        printTerminal(`Branche : ${branch}`, "note");

        const upstream = gitState.branchUpstreams[branch];

        if (upstream && fetchedBranches[upstream]) {
            const remote = fetchedBranches[upstream].commits || [];
            const local = gitState.branches[branch];
            const ahead = local.filter(c => !remote.includes(c)).length;
            const behind = remote.filter(c => !local.includes(c)).length;

            if (ahead === 0 && behind === 0) {
                printTerminal(`Votre branche est à jour avec origin/${upstream}`, "note");
            } else if (ahead > 0 && behind === 0) {
                printTerminal(`Votre branche est en avance de ${ahead} commit(s) sur origin/${upstream}`, "note");
            } else if (ahead === 0 && behind > 0) {
                printTerminal(`Votre branche est en retard de ${behind} commit(s) par rapport à origin/${upstream}`, "note");
            } else {
                printTerminal(`Votre branche est en avance de ${ahead} et en retard de ${behind} commit(s)`, "note");
            }
        } else if (upstream && !fetchedBranches[upstream]) {
            const local = gitState.branches[branch];
            const ahead = local.length;
            if (ahead === 0) {
                printTerminal(`Votre branche n'a poussé aucun commit sur origin/${upstream}`, "note");
            } else {
                printTerminal(`Votre branche est en avance de ${ahead} commit(s) sur origin/${upstream}`, "note");
            }
        } else if (!upstream) {
            printTerminal(`Aucun upstream : pas de branche remote associée à la branche ${branch}`, "note");
        } else {
            printTerminal("Aucune donnée distante récente disponible", "note");
        }


        printTerminal(`Index : ${stagedFiles.join(", ") || "vide"}`, "note");

        if (modifiedFiles.length) {
            printTerminal(`Modifiés : ${modifiedFiles.join(", ")}`, "note");
        } else {
            printTerminal("Modifiés : aucun", "note");
        }

        const commits = gitState.branchOwnCommits[branch] || [];
        printTerminal(`Derniers commits : ${commits.slice(-3).join(" | ") || "aucun"}`, "note");

        return;
    }

    // --- git fetch origin ---
    if (cmd.startsWith("git fetch")) {

        const parts = cmd.split(" ").filter(Boolean);

        if (cmd === "git fetch" || cmd === "git fetch origin") {

            for (let branch in gitState.remoteBranches) {
                fetchedBranches[branch] = {
                    commits: deepCopy(gitState.remoteBranches[branch]),
                    files: deepCopy(gitState.remoteBranchFiles[branch])
                };
            }

            printTerminal("Fetch effectué : récupération des mises à jour distantes.", "note");

            renderRemote();
            renderRemoteButtons();
            renderRemoteProject();
            renderRemoteCommits();
            renderRemoteStatus();
            renderBranchCompareButtons();

            if (gitState.level === 32) advanceLevel();

            return;
        }

        if (parts.length === 3 && parts[0] === "git" && parts[1] === "fetch" && parts[2] !== "origin") {
            printTerminal("Erreur : usage invalide. Pour fetch une branche : git fetch origin <branch>", "error");
            return;
        }

        if (parts.length === 4 &&
            parts[0] === "git" &&
            parts[1] === "fetch" &&
            parts[2] === "origin") {

            const branch = parts[3];

            if (!gitState.remoteBranches[branch]) {
                printTerminal(`Erreur : la branche distante origin/${branch} n’existe pas.`, "error");
                return;
            }

            fetchedBranches[branch] = {
                commits: deepCopy(gitState.remoteBranches[branch]),
                files: deepCopy(gitState.remoteBranchFiles[branch])
            };

            printTerminal(`Fetch effectué : mise à jour de origin/${branch}`, "note");

            renderRemote();
            renderRemoteButtons();
            renderRemoteProject();
            renderRemoteCommits();
            renderRemoteStatus();
            renderBranchCompareButtons();
            return;
        }

        printTerminal("Erreur : commande fetch invalide", "error");
        return;
    }



    if (cmd === "MODIFY_SCRIPT") {

        if (!gitState.branchFiles[gitState.currentBranch]) {
            printTerminal("Erreur: repository non initialisé", "error");
            return;
        }
        const node = findNodeByName(gitState.branchFiles[gitState.currentBranch], "script.js");
        if (node) {
            node._modified = true;
            if (!modifiedFiles.includes("script.js")) modifiedFiles.push("script.js");
            printTerminal("script.js modifié (simulation)", "note");

            if (gitState.level === 7 && levels[6].exact === "MODIFY_SCRIPT" && modifiedFiles.includes("script.js")) {
                advanceLevel();
            }

            projectTreeContainer.innerHTML = "";
            renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);
        } else {
            printTerminal("Fichier script.js introuvable", "error");
        }
        return;
    }

    if (cmd === "MERGE") {

        const branchToMerge = 'feature/login';
        if (!gitState.remoteBranches[branchToMerge]) {
            printTerminal(`Erreur : branche distante ${branchToMerge} introuvable`, "error");
            return;
        }
        mergeBranch(branchToMerge);
        return;
    }

    printTerminal(`Commande inconnue : ${cmd}`, "error");
}

// --- Historique ---
terminalInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const value = terminalInput.value.trim();

        if (value !== "") {
            commandHistory.push(value);
        }

        handleCommand(value);
        terminalInput.value = "";
        historyIndex = commandHistory.length;
    }

    else if (e.key === "ArrowUp") {
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistory[historyIndex];
        }
    }

    else if (e.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            terminalInput.value = "";
        }
    }
});

// --- Modifier fichier via bouton ---
modifyBtn.addEventListener("click", () => {
    if (selectedFile && !modifiedFiles.includes(selectedFile)) {
        modifiedFiles.push(selectedFile);
        markFileModifiedInBranch(gitState.currentBranch, selectedFile);
        printTerminal(`${selectedFile} modifié !`, "note");
        selectedFile = null;
        modifyBtn.style.display = "none";

        if (gitState.level === 7 && gitState.currentBranch === "feature/login" && modifiedFiles.includes("index.html")) {
            advanceLevel();
        }

        if (gitState.level === 21 && gitState.currentBranch === "feature/signup" && modifiedFiles.includes("index.html")) {
            advanceLevel();
        }

        if (gitState.level === 15 && gitState.currentBranch === "feature/signup" && modifiedFiles.includes("script.js")) {
            advanceLevel();
        }

        if (gitState.level === 18 && gitState.currentBranch === "feature/signup" && modifiedFiles.includes("style.css")) {
            advanceLevel();
        }

        if (gitState.level === 34 && modifiedFiles.includes("index.html")) {
            advanceLevel();
        }

        if (gitState.level === 35 && modifiedFiles.includes("style.css")) {
            advanceLevel();
        }

        projectTreeContainer.innerHTML = "";
        renderProject(gitState.branchFiles[gitState.currentBranch], projectTreeContainer);
    } else {
        printTerminal("Aucun fichier sélectionné ou déjà modifié.", "note");
    }
});


// --- Bouton Copier l'URL ---
copyUrlBtn.addEventListener('click', async () => {
    const url = repoUrlDisplay.textContent || '';
    if (!url) {
        printTerminal('Aucune URL à copier', "error");
        return;
    }
    try {
        await navigator.clipboard.writeText(url);
        printTerminal(`URL copiée : ${url}`, "note");
    } catch (err) {
        const ta = document.createElement('textarea');
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); printTerminal(`URL copiée (fallback) : ${url}`, "note"); } catch (e) { printTerminal(`Impossible de copier l\'URL`, "error"); }
        ta.remove();
    }
});

// --- Initialisation ---
printTerminal("Bienvenue dans le simulateur Git avancé !", "note");
printTerminal("Vous allez simuler l'avancée d'un projet web, dans un cadre professionnel", "note");
printTerminal("Vous disposez de votre terminal où effectuer des commandes, ainsi que de l'interface de Github/Gitlab", "note");
printTerminal("Vous allez tout d'abord récupérer le projet initial et son contenu via Github/Gitlab en clonant le dépôt", "note");
repoUrlDisplay.textContent = "https://gitlab.com/CodePhenix/ProjetPhenix.git";

gitState.remoteBranches = { main: [] };
gitState.branchUpstreams = { main: "main" };
gitState.remoteBranchFiles = { main: deepCopy(projectTemplate) };

renderRemoteButtons();
renderRemoteProject();
renderRemoteCommits();
renderRemoteStatus();

printTerminal(`Niveau 1 : ${levels[0].msg}`, "level");
