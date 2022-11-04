function execute() {
  console.log(1);
  setTimeout(() => console.log(2), 2000);
  console.log(3);
}

execute();
