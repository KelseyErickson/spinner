let timer = 100;

for (let i = 0; i < 2; i++){

setTimeout(() => { process.stdout.write('\r|  ');}, timer += 200);

setTimeout(() => { process.stdout.write('\r/  ');}, timer += 200);

setTimeout(() => { process.stdout.write('\r-  ');}, timer += 200);

setTimeout(() => { process.stdout.write('\r\\  ');}, timer += 200);

setTimeout(() => { process.stdout.write('\r|  ');}, timer += 200);

;}


