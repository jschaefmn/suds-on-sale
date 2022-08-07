const { getLinkPreview } = require("link-preview-js");

async function imagePreview(url) {
    const data = await getLinkPreview(url, {
        imagesPropertyType: "og",
        followRedirects: "manual",
        handleRedirects: (url) => {
            if(typeof url === String) {
                console.log("hello");
                return true;
            } else {
                console.log("goodbye");
                false;
            }
        },
        headers: {
            "user-agent": "googlebot"
        }
    });


    return data.images[0];
}

module.exports = imagePreview;
