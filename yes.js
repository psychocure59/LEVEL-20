const terminal = document.getElementById("terminal");
const progress = document.getElementById("progress");
const percent = document.getElementById("percent");

const fakeFiles = [
    "photos_backup.dat",
    "private_gallery.enc",
    "messages_archive.db",
    "browser_history.log",
    "system_cache.bin",
    "secret_folder.zip",
    "personal_data.dat",
    "hidden_files.enc",
    "documents_backup.db"
];

let progressValue = 0;

function addLine(text, className = "") {

    const line = document.createElement("div");

    line.className = "line " + className;

    line.textContent = "> " + text;

    terminal.appendChild(line);

    terminal.scrollTop = terminal.scrollHeight;
}

function generateFakeIP() {

    return (
        Math.floor(Math.random() * 223) + 1 +
        "." +
        Math.floor(Math.random() * 255) +
        "." +
        Math.floor(Math.random() * 255) +
        "." +
        Math.floor(Math.random() * 255)
    );

}

const interval = setInterval(() => {

    progressValue += Math.floor(Math.random() * 4) + 1;

    if (progressValue >= 100) {
        progressValue = 100;
    }

    progress.style.width = progressValue + "%";

    percent.textContent = progressValue;


    if (Math.random() > 0.5 && progressValue < 100) {

        const file =
            fakeFiles[
                Math.floor(
                    Math.random() * fakeFiles.length
                )
            ];

        addLine(
            "Accessing " + file,
            "success"
        );

    }


    if (Math.random() > 0.7 && progressValue < 100) {

        addLine(
            "Connection: " + generateFakeIP(),
            "warning"
        );

    }


    if (progressValue >= 100) {

        clearInterval(interval);

        addLine(
            "DATA TRANSFER COMPLETE",
            "success"
        );

        setTimeout(() => {

            window.location.href = "protect.html";

        }, 2000);

    }

}, 250);