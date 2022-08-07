const arg = process.argv.slice(2);

const date = arg[0]; //'21-06-08-2022';

let interval;

const parseDate = (date) => {
    const mass = date.split('-');
    return new Date(mass[3], mass[2]-1, mass[1], mass[0]);

}

const diffToString = (diff) => {
    let remainder = Math.trunc(diff/1000);
    const sec = remainder % 60;
    remainder = Math.trunc(remainder / 60);
    const min = remainder % 60;
    remainder = Math.trunc(remainder / 60);
    const hours = remainder % 24;
    remainder = Math.trunc(remainder / 24); 
    const days = remainder % 365;
    const years = Math.trunc(remainder / 365);
    if (diff<=0) {
        clearInterval(interval);
        return 'время истекло';
    }
    return `осталось ждать лет:${years},дней:${days},часов:${hours},минут:${min},секунд:${sec}`;
}

const showDiff = (int) => {

const now = new Date();

const diff = ((parseDate(date)-now));

console.log(diffToString(diff));
}


if (date.length!==13){
    console.log('в качестве параметра указать целевую дату/время в формате час-день-месяц-год');
} else {
        interval = setInterval(showDiff,1000);
    }
