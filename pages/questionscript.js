let questions = 4;

let questionsLeft = ' [' + questions + ' questions left]';
let adjective = prompt('Name a equipment that can hold a camera' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let verb = prompt('Name a equipment that is use to get people voice' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let noun = prompt('Name an equipment that hold the phone in place' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let name = prompt('Name an equipment that flash when taking a picture' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

alert('All done. Ready for the message?');



let sentence = "<h2>The equipments that is needed for create a documentaries " + adjective;
sentence += 'Phone clamp, Mini Stand, ' + verb;
sentence += 'LED Lamp, ' + noun;
sentence += 'Minigun microphone and Tripod' + name + '.</h2>';
document.write(sentence);