let magicGrid = new MagicGrid({
    container: '.container',
    animate: false,
    useTransform: true,
    useMin: true,
    static: false,
    center: true,
    gutter: 30,
    items: 4, // Don't forget to change with every new image!
});

magicGrid.listen();

const images = document.querySelectorAll('img');
let imagesLoaded = 0;

images.forEach(img => {
    if (img.complete) {
        imagesLoaded++;
    } else {
        const refresher = setInterval(() => {
            magicGrid.positionItems();
            console.log("Partial Reposition")
        }, 1000);
        img.addEventListener('load', () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                magicGrid.positionItems();
                console.log("Full Reposition");
                clearInterval(refresher);
                console.log("Interval Has Been Cleared")
            }
        });
    }
});

const id = magicGrid.onPositionComplete(() => {
    console.log("Grid Has Been Resized");
});

