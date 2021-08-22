(() => {
    var currentIndex = 1;
    var textCollection = ['Decide', 'Track Projects', 'Track Sales'];
    var headerScrollText = $('#header-scroll');
    headerScrollText.text(textCollection[0]);
    setInterval(function () {
        headerScrollText.fadeOut(function () {
            $(this).text(textCollection[currentIndex]);
            if (currentIndex === textCollection.length - 1) {
                currentIndex = 0;
                return
            }
            currentIndex = currentIndex + 1;
        }).fadeIn();
    }, 3000);
})();
