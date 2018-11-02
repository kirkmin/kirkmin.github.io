function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

var openModal = function () {
	document.body.className = "modal-open"
    document.body.style.paddingRight = getScrollbarWidth() + "px"
}

var closeModal = function (e, elementId) {
    document.getElementById(elementId).checked = false;
    document.body.className = ""
    document.body.style.paddingRight = "0px"
}

var closeModalAfterCheck = function (e, elementId) {
    if (e.target == e.currentTarget) {
        document.getElementById(elementId).checked = false;
        document.body.className = ""
        document.body.style.paddingRight = "0px"
    }
}