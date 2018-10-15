const identifier = /^[$_0-9a-zA-Z]+$/;
export const isIdentifier = (code: string) => identifier.test(code);
