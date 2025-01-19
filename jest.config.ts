module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
  },
  testEnvironment: 'jsdom', // Ensure a DOM-like environment for React
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Transpile TypeScript and JSX
  },
};
