import { program } from "commander";

program
  .name("inato-cli")
  .command("trials")
  .description("get the list of clinical trials")
  .action(async () => {
    const response = await fetch("http://localhost:8080/ping");
    console.log(await response.text());
  })
  .parseAsync(process.argv);
