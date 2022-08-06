const { getLinkPreview } = require("link-preview-js");

async function imagePreview(url) {
    const data = await getLinkPreview(url, {
        imagesPropertyType: "og",
        headers: {
            "user-agent": "googlebot"
        }
    });

    const imageUrl = await data.images[0];
    
    return await imageUrl;
}

module.exports = imagePreview;
