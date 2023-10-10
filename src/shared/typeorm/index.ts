import { createConnection } from 'typeorm';

createConnection()
.then(() => console.log('TypeOrm Conectado'))
.catch(() => console.log('Erro ao conectar ao TypeOrm'));
