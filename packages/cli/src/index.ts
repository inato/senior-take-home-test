import { program } from "commander";

program.requiredOption("-p, --path <type>", "the api path to call").parse();

program
  .name("inato-cli")
  .command("trials")
  .description("get the list of clinical trials")
  .requiredOption("-p, --path <type>", "the api path to call")
  .action(async function ({ path }) {
    fetch(`http://localhost:8080/${path}`)
      .then((response) => response.text())
      .then((body) => {
        console.log(body);
      });
  })
  .parseAsync(process.argv);
