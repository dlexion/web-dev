var program = require('commander');

const TODO_STATUS ={
  OPEN:'TODO_STATUS_OPEN',
  IN_PROGRESS: 'TODO_STATUS_IN_PROGRESS',
  DONE: 'TOD_STATUS_DONE'
}

program
  .command('create')
  .action(()=>{
      console.log("Create works");
  });

program
  .command('read <id>')
  .action((id)=>{
      console.log(`id = ${id}`);
  });

program
  .command('list')
  .option('--status <status>')
  .action((cmd) =>{
      console.log(`status = ${cmd.status}`);
  });

program
  .command('update <id>')
  .action((id) => {
    console.log(`Update item with id = ${id}`);
  });

  program
  .command('status <id> <status>')
  .action((id, status) => {
    console.log(`Set status to item with id = ${id} to ${status}`);
  });

program.parse(process.argv);