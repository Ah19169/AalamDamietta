let currentSound = null; // المتغير لتخزين الصوت الحالي
function toggleVideo(){
    const trailer= document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');
    if (trailer.classList.contains('active')) {
        video.play();
                // هنا نوقف أي صوت شغال
                if (currentSound && !currentSound.paused) {
                  currentSound.pause();
                  currentSound.currentTime = 0;
              }
      } else {
        video.pause();
      }
}
function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content'); // تم التغيير هنا

    // تغيير الخلفية
    banner.style.background = `url("${bg}")`;
  // تأكد من المسار الصحيح
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // إضافة أو إزالة الفئة active على العناصر
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
    let sound;
    if(title === 'salm'){
      sound = document.getElementById('sound-rafat');
    }
    if(title === 'درييييييي'){
      sound = document.getElementById('sound-naa');
    }
    if(title === 'مدكور'){
      sound = document.getElementById('sound-army');
    }
    if(title === 'حواسسسس'){
      sound = document.getElementById('sound-egypt');
    }
        // إيقاف الصوت الحالي إذا كان موجودًا
        if (currentSound && !currentSound.paused) {
          currentSound.pause(); // إيقاف الصوت الحالي
          currentSound.currentTime = 0; // إعادة الصوت إلى البداية
      }
    if(sound){
      sound.play();
      currentSound = sound; // تحديث الصوت الحالي ليكون الصوت الجديد
    }
}
