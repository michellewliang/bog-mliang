var popup = document.getElementById("myPopup");
var popupImage = document.getElementById("popupImage");
var caption = document.getElementById("caption");
var images = document.getElementsByClassName("gallery-img");

for (let i = 0; i < 8; i++) {
    let img = images[i];
    img.onclick = function() {
        popup.style.display = "block";
        popupImage.src = this.src;
        caption.innerHTML = this.alt;
    }
}

function closePopup() {
    popup.style.display = "none";
}

function toggleTimelineItem(event, contentId) {
    var content = document.getElementById(contentId);
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}