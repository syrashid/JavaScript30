const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

async function getVideo() {
  try {
    const localMediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    console.log(localMediaStream);
    video.srcObject = localMediaStream;
    video.play();
  } catch (err) {
      console.error(`OH NO!!!`, err);
    };
}

getVideo();
