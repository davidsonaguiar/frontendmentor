const SHARE_BUTTON = document.getElementById("share-button");
const SHARE = document.getElementById("share");
console.log(SHARE_BUTTON);
console.log(SHARE);

const handleClick = () => SHARE.classList.toggle("hidden");

SHARE_BUTTON.addEventListener("click", handleClick);