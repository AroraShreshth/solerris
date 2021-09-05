import { BigNumber } from "ethers";

export const toDecimal = (amount: BigNumber | string, decimals: number) => {
  let amountInString = amount.toString();
  if (amountInString.length <= decimals) {
    const pad = Array(decimals + 1 - amountInString.length + 1).join("0");
    amountInString = pad + amountInString;
  }

  const beforeDecimal = amountInString.slice(0, -decimals);
  const afterDecimal = amountInString.slice(-decimals).replace(/0+$/, ""); // replaces trailing zeroes
  let output =
    afterDecimal.length > 0
      ? beforeDecimal + "." + afterDecimal
      : beforeDecimal;

  return output;
};
