// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://paulbramsen.github.io/hkn2048/img/212/akshaynarayan-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/jianqiao-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/mmiyashita-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/sge-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/soumya-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/sge-212.gif",        
        "http://paulbramsen.github.io/hkn2048/img/212/elutz-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/varunnaik-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/brian-212.gif",        
        "http://paulbramsen.github.io/hkn2048/img/212/edliao-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/212/alecmouri-212.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/akshaynarayan-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/jianqiao-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/mmiyashita-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/sge-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/soumya-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/sge-114.gif",        
        "http://paulbramsen.github.io/hkn2048/img/114/elutz-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/varunnaik-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/brian-114.gif",        
        "http://paulbramsen.github.io/hkn2048/img/114/edliao-114.gif",
        "http://paulbramsen.github.io/hkn2048/img/114/alecmouri-114.gif",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
