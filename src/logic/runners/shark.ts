import { useTerminalStore } from "@/stores/terminal";
import { createRunnableCommand } from "../commands";

export const shark = createRunnableCommand("shark", async (_, cmd) => {
  const terminalStore = useTerminalStore();

  const shark = ` 
    ⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⠕⠕⠕⠕⢕⢕<br/>
    ⢕⢕⢕⢕⢕⠕⠕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⠕⠁⣁⣠⣤⣤⣤⣶⣦⡄⢑<br/>
    ⢕⢕⢕⠅⢁⣴⣤⠀⣀⠁⠑⠑⠁⢁⣀⣀⣀⣀⣘⢻⣽⣽⣽⣽⣽⡟⢁⢔<br/>
    ⢕⢕⠕⠀⣽⡁⠄⠀⣹⣽⣽⣽⡿⢋⣥⠤⠙⣽⣽⣽⣽⣽⡿⠿⡟⠀⢔⢕<br/>
    ⢕⠕⠁⣴⣦⣤⣴⣾⣽⣽⣽⣽⣇⠻⣇⠐⠀⣼⣽⣽⣽⣽⣽⣄⠀⠐⢕⢕<br/>
    ⠅⢀⣾⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣷⣶⣶⣽⣽⣽⣽⣽⣽⣽⣽⣷⡄⠐⢕<br/>
    ⠀⢸⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⡄⠐<br/>
    ⢄⠈⢿⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⡆<br/>
    ⢕⢔⠀⠈⠛⠿⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽<br/>
    ⢕⢕⢄⠈⠳⣶⣶⣶⣤⣤⣤⣤⣭⡍⢭⡍⢨⣯⡛⢿⣽⣽⣽⣽⣽⣽⣽⣽<br/>
    ⢕⢕⢕⢕⠀⠈⠛⠿⢿⣽⣽⣽⣽⣽⣦⣤⣽⣽⣽⣦⣈⠛⢿⢿⣽⣽⣽⣽<br/>
    ⢕⢕⢕⠁⢠⣾⣶⣾⣭⣖⣛⣽⠿⣽⣽⣽⣽⣽⣽⣽⣽⣷⡆⢸⣽⣽⣽⡟<br/>
    ⢕⢕⠅⢀⣾⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⣽⡿⠟⠈⢿⣽⣽⡇<br/>
    ⢕⠕⠀⠼⠟⢉⣉⡙⠻⠿⢿⣽⣽⣽⣽⣽⡿⢿⣛⣭⡴⠶⠶⠂⠀⠿⠿
    `;

  terminalStore.push(shark, cmd);
});
