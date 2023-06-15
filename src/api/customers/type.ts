interface IMouthCount {
  month: string;
  count: number;
}

export interface IGraphData {
  monthCount: IMouthCount[];
  percentageIncrease: number;
}

export interface MakeCompanyVipPayload {
  isVIP: boolean;
}
