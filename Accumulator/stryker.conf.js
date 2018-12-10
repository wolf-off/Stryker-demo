module.exports = function (config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "karma",
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karma: {
      projectType: "custom",
      configFile: "karma.conf.js",
      config: {}
    },
    mutate: ["accumulator.js"],
    tsconfigFile: "tsconfig.json",
    maxConcurrentTestRunners: 1
  });
};
