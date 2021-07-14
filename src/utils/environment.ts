export const getEnvironmentVariable = (variableName: string): string => {
  const value = process.env[variableName];
  if (value === undefined) {
    throw new Error(`Missing environment variable [${variableName}].`);
  }
  return value;
};
