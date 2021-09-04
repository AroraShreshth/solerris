import { BigNumber } from "@ethersproject/bignumber";
import { DateTime } from "luxon";

export type Stream = {
  isSender: boolean;
  from: string;
  to: string;
  isActive: boolean;
  startDate: DateTime;
  endDate: DateTime;
  claimableSOL: BigNumber;
  totalSOL: BigNumber;
};
