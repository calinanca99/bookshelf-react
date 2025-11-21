module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.json"
		}
	},
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	moduleNameMapper: {
		"^.+\\.(css|scss|sass)$": "identity-obj-proxy"
	},
};
