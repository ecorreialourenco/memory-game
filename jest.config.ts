export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(gif|ttf|eot|svg|png)$": "identity-obj-proxy",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
