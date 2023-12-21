const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
    { ime: 'Mile', prosek: 7.5, grad: 'Ohrid' }
  ];
 

//  1) Студенти од Скопје чие име завршува на „а“ и имаат просек над 7, подредени по име растечки.

const taskOne = studenti
    .filter((item) => item.grad === 'Skopje' && item.prosek > 7 && item.ime.endsWith('a'))
    .sort((a, b) => a.ime[0].localeCompare(b.ime[0]))

console.log('Task One')
console.log(taskOne)

//  2) Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки 

const taskTwo = studenti
    .filter((item) => item.prosek > 9 && item.grad !== 'Skopje')
    .sort((a, b) => b.prosek - a.prosek)

console.log('Task Two')
console.log(taskTwo)

//  3) Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек

const taskThree = studenti
    .filter((item) => item.ime.length === 5)
    .slice(0, 3)
    .sort((a, b) => a.prosek - b.prosek)

console.log('Task Three')
console.log(taskThree)

//  4) Вкупен просек на студенти кои се од Куманово

const vkupenProsek = studenti
    .filter((item) => item.grad === 'Kumanovo')
    .reduce((acc, s) => acc + s.prosek, 0)

console.log('Task Four')
console.log(vkupenProsek)

//  5) Просек на просеците од градовите Скопје и Охрид



const skopjeOhrid = studenti
    .filter((item) => item.grad === 'Skopje' || item.grad === 'Ohrid')

    const skopjeOhridProsek = skopjeOhrid
    .reduce((acc, s) => acc + s.prosek, 0)

console.log('Task Five')
console.log(`${skopjeOhridProsek / skopjeOhrid.length}`)


//  6) Да се додаде уште еден студент со име Горан, просек 8.3, од Струмица

const newStudent = {ime: 'Goran', prosek: 8.3, grad: 'Strumica'}
studenti.push(newStudent)

console.log('Task Six')
console.log(studenti)


//  7) Да се избрише првиот студент во студенти

studenti.shift()
console.log('Task Seven')
console.log(studenti)


//  8) Да се креира нов array со студентите од Охрид, Скопје и Куманово, кадешто просекот е поголем за 1 (динамички)

const taskEight = studenti
    .filter((item) => item.grad === 'Ohrid' || item.grad === 'Skopje' || item.grad === 'Kumanovo')
    .map((item) => {
        if (item.prosek > 9){
            return {...item, prosek: 10}
        } else{
            return {...item, prosek: item.prosek + 1}
        }
    })

console.log('Task Eight')
console.log(taskEight)