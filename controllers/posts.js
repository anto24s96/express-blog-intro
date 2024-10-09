const { readJSON, writeJSON } = require("../utils.js");

const get = (req, res) => {
    const posts = readJSON("posts");
    res.format({
        html: () => {
            let html = `
                <main>
                    ${posts
                        .map(
                            ({ title, description, image, tags }) => `
                        <div>
                            <h2>${title}</h2>
                            <img width="350" src="/${image}" />
                            <p>${description}</p>
                            <p>${tags
                                .map((tag) => `<span>#${tag}</span>`)
                                .join(" ")}</p>                          
                        </div>
                    `
                        )
                        .join("")}
                </main>
            `;
            res.send(html);
        },
        json: () => {
            res.json(posts);
        },
    });
};

const post = (req, res) => {
    const posts = readJSON("posts");
    writeJSON("posts", [...posts, req.body]);
    res.send("Post effettuato correttamente");
};

module.exports = {
    get,
    post,
};
