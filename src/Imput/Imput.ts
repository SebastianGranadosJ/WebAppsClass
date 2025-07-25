import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

export default class Imput {
  public static prompt = async (message: string): Promise<string> => {
    const rl = createInterface({ input, output });

    const answer = await rl.question(message);

    rl.close();
    return answer;
  };
}