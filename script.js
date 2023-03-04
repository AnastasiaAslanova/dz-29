function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
let myTime = {
    curentDate: new Date(),
    showMyCurentTime: function() {
        document.querySelector('.time__display--hour').innerHTML = addZero(this.curentDate.getHours()) + ':';
        document.querySelector('.time__display--minutes').innerHTML = addZero(this.curentDate.getMinutes()) + ':';
        document.querySelector('.time__display--seconds').innerHTML = addZero(this.curentDate.getSeconds());
    },
    getChangedTime: function () {
        let hourInput = document.querySelector('#change-hour');
        let minutesInput = document.querySelector('#change-minutes');
        let secondsInput = document.querySelector('#change-seconds');
        let changeOnSec = 0;

        if (hourInput.value) {
            changeOnSec += 3600 * parseInt(hourInput.value);
        }
        if (minutesInput.value) {
            changeOnSec += 60 * parseInt(minutesInput.value);
        }
        if (secondsInput.value) {
            changeOnSec += parseInt(secondsInput.value);
        }

        let newTimestamp = this.curentDate.getTime() + changeOnSec * 1000;
        return new Date(newTimestamp);
    },
    showNewTime: function (date) {
        document.querySelector('.new-hour').innerHTML = addZero(date.getHours()) + ':';
        document.querySelector('.new-minute').innerHTML = addZero(date.getMinutes()) + ':';
        document.querySelector('.new-second').innerHTML = addZero(date.getSeconds());
    }
};

document.querySelector('.btn').addEventListener("click",
    function (e) {
    e.preventDefault();
    myTime.showNewTime(myTime.getChangedTime());
    }
    );
 myTime.showMyCurentTime();

