export interface ISingleQuoteResponseSchema {
  data: {
    policyId: number;
    policyName?: string;
    insurerName?: string;
    premium?: number;
    coverageAmount?: number;
    [key: string]: any; // optional fallback for unknown fields
  };
}
