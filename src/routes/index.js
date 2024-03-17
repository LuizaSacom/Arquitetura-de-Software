const Aluno = require('./src/models/aluno');
const Turma = require('./src/models/turma');
const TurmaPresencial = require('./src/models/turma_presencial');

const aluno = new Aluno('Maria', 'maria123', '123456');
const turma = new Turma('Turma1', 8);
const turmaPresencial = new TurmaPresencial('Turma2', 7, 80);

console.log(aluno);
console.log(turma);
console.log(turmaPresencial);
console.log(turma.aprovado());
console.log(turmaPresencial.aprovado());