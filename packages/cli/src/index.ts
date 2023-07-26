import { program } from "commander";

program
  .name("inato-cli")
  .command("trials")
  .description("get the list of clinical trials")
  .requiredOption("-p, --path <type>", "the api path to call")
  .action(async function ({ path }) {
    const response = await fetch(`http://localhost:8080/${path}`);
    console.log(await response.text());
  })
  .parseAsync(process.argv);
