//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const checkBalanceEval: EvalFunction = {
    name: 'check-balance Tool Evaluation',
    description: 'Evaluates the correctness of checking ETH balance for an Ethereum address',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please check the ETH balance for the address 0xAb5801a7D398351b8BE11C439e05C5B3259aeC9B.");
        return JSON.parse(result);
    }
};

const getTransactionsEval: EvalFunction = {
    name: 'get-transactions Tool Evaluation',
    description: 'Evaluates retrieving recent transactions for an Ethereum address',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please get the most recent 5 transactions for the Ethereum address 0x1234567890ABCDEF1234567890abcdef12345678 using the get-transactions tool.");
        return JSON.parse(result);
    }
};

const getTokenTransfersEval: EvalFunction = {
    name: 'get-token-transfers',
    description: 'Tests retrieving ERC20 token transfers for a specific Ethereum address',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please get the 5 most recent ERC20 token transfers for the address 0x43510b89CadA923E6C5E6AB808eD5c666C5239fc");
        return JSON.parse(result);
    }
};

const getContractAbiEval: EvalFunction = {
    name: "get-contract-abi Evaluation",
    description: "Tests the get-contract-abi tool's functionality by requesting a contract ABI",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Retrieve the ABI for the contract at address 0xAbCdEf1234567890AbCdEf1234567890AbCdEf12");
        return JSON.parse(result);
    }
};

const getGasPricesEval: EvalFunction = {
    name: 'get-gas-prices Tool Evaluation',
    description: 'Evaluates the accuracy and completeness of retrieving current gas prices in Gwei',
    run: async () => {
        const result = await grade(openai("gpt-4"), "What are the current gas prices in Gwei?");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [checkBalanceEval, getTransactionsEval, getTokenTransfersEval, getContractAbiEval, getGasPricesEval]
};
  
export default config;
  
export const evals = [checkBalanceEval, getTransactionsEval, getTokenTransfersEval, getContractAbiEval, getGasPricesEval];