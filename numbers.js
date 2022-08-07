import { program } from 'commander';
import colors from 'colors'

const prime = (n) => {
	for (let i = 2;i <= Math.sqrt(n);i++) {
		if (n % i === 0) return false;
		}
		return true;
	}
colors.setTheme({
		0: 'green',
		1: 'yellow',
		2: 'red'
	  });

let colorCounter = 0;

program
  .option('-f, --from <first>', 'set first number')
  .option('-t, --to <last>', 'set second number');

program.parse(process.argv);
const options = program.opts();
const from = Number(options.from);
const to = Number(options.to);
if (isNaN(from) || isNaN(to)) {
	console.log(colors.red('Ошибка ввода параметров - диапазон должен быть указан от -f и до -t'))
	} else {

				for (let x = Number(options.from);x < Number(options.to);x++)if (prime(x)) {
        			console.log(colors[colorCounter](x));
					if (colorCounter++ == 2) {colorCounter=0;}
        		}
			}




