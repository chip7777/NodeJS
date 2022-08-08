import fs from 'fs';
import lineReader from 'line-reader';

const [fileName] = process.argv.slice(2);

const getIp = (str) => {
    return str.match(/((\d{1,3}\.){3}\d{1,3})/g)[0];
}
 const getFirstOctet = (ip) => {
    if (ip) {
        return ip.split('.')[0];
    } else return null;
}

if (!fileName) {
    console.log('Укажите имя файла в параметрах!');
} else {
    const parsed = [];
    const streams = new Object();
    lineReader.eachLine(fileName, function(line) { 
        const octet = getFirstOctet(getIp(line));
        if (parsed.indexOf(octet)===-1) {
            parsed.push(octet);
              streams[Number(octet)] = fs.createWriteStream('./log_' + octet + '.log');
              streams[Number(octet)].write(line +'\n');
        } else {
            streams[Number(octet)].write(line + '\n');
        }
    }); 
    parsed.forEach(el => {
        streams[Number(el)].end();
    })
}
