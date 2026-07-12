import { FINANCE_SYSTEM_PROMPT } from "./finance.system.prompt";

export const buildFinancePrompt = (
  question: string
): string => {
  return `
${FINANCE_SYSTEM_PROMPT}

User Question:

${question}
`;
};