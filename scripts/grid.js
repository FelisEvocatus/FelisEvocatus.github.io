let magicGrid = new MagicGrid({
    container: '.container',
    animate: false,
    useTransform: true,
    static: true,
    gutter: 30,
});

magicGrid.listen();

const images = document.querySelectorAll('.gallery-image');
let imagesLoaded = 0;

const refresher = setInterval(() => {
    magicGrid.positionItems();
    console.log("Partial Reposition X")
}, 1000);

images.forEach(img => {

    if (img.complete) {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            magicGrid.positionItems();
            clearInterval(refresher);
            console.log("All Images are Loaded");
        }
    }

    else {
        img.addEventListener('load', () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                magicGrid.positionItems();
                clearInterval(refresher);
                console.log("----- Interval Has Been Cleared -----");
            }
        });
    }

});