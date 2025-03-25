rad = 6;
deg = (rad / Math.PI) * 180;
min = (deg % Math.floor(deg)) * 60;
sec = (min % Math.floor(min)) * 60;
document.write(Math.floor(deg) + " degrees " + Math.floor(min) + " minutes " + Math.floor(sec) + " seconds");