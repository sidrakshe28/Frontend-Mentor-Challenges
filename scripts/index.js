const shareButton = document.getElementById("shareButton");
const sharingMenu = document.getElementById("sharingMenu");
const smallSharingMenu = document.getElementById("smallSharingMenu");
const shareButtonSmall = document.getElementById("shareButtonSmall");

shareButton.addEventListener('click', () => {
    console.log("click");
    const screenWidthSize = screen.width;
    // handle larger screens (greater than 450px)
    if (screenWidthSize > 450) {
        if (sharingMenu.classList.contains('hide')) {
            sharingMenu.classList.remove('hide');
        }
        else {
            sharingMenu.classList.add('hide');
        }
    }
    else {
        shareButton.classList.add('remove');
        smallSharingMenu.classList.remove('hide');
    }
    
});

shareButtonSmall.addEventListener('click', () => {
    console.log("Click from small screen");
    if (!smallSharingMenu.classList.contains('hide')) {
        sharingMenu.classList.remove('hide');
        smallSharingMenu.classList.add("hide");
        shareButton.classList.remove("remove");
    }
    else {
        sharingMenu.classList.add('hide');
    }
})