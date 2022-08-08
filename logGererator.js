import fs from "fs";
const [flogName] = process.argv.slice(2);
const mask = ` - - [25/May/2021:00:07:24 +0000] "POST /baz HTTP/1.1" 200 0 "-" "curl/7.47.0"`;

function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

const genIp = () => {
  let ip = "";
  for (let i = 0; i < 4; i++) {
    ip = ip + getRandomArbitrary(1, 255) + ".";
  }
  return ip.slice(0, -1);
};

if (!fileName) {
  console.log("Укажите имя файла в параметрах!");
} else {
  const writableStream = fs.createWriteStream(logName);

  for (let i = 0; i < 1085000; i++) {
    writableStream.write(genIp() + mask + "\n");
  }
  writableStream.close();
}
