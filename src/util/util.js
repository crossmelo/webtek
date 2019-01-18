export default {
    timeFormat: function(str) {
        if (!str) {
            return ""
        }
        let year = str.substring(0, 4);
        let month = str.substring(5, 7);
        let day = str.substring(8, 10);
        return year + "年" + month + "月" + day + "日"
    },

    currentTime: function() {
        var nowTime = new Date(),
            newTime = new Date(obj * 1000),
            year = newTime.getYear(),
            month = newTime.getMonth() + 1,
            day = newTime.getDate()
    },

    timeTransform: function(obj) {
        var nowTime = new Date(),
            newTime = new Date(obj * 1000),
            year = newTime.getYear(),
            month = newTime.getMonth() + 1,
            day = newTime.getDate(),

            time = "";

        if (nowTime.getYear() == year) {
            var yesterday = new Date(nowTime - 1000 * 60 * 60 * 24);
            if (nowTime.getMonth() + 1 === month && nowTime.getDate() == day) {
                time = "今天 " + newTime.getHours() + ":" + newTime.getMinutes();
            } else if (yesterday.getMonth() + 1 === month && yesterday.getDate() === day) {
                time = "昨天 " + newTime.getHours() + ":" + newTime.getMinutes();
            } else {
                time = (month < 10 ? ('0' + month) : month) + "-" + (day < 10 ? ('0' + day) : day);
            }

        } else {
            time = (1900 + year) + "-" + (month < 10 ? ('0' + month) : month) + "-" + (day < 10 ? ('0' + day) : day);
        }

        return time;
    },
}