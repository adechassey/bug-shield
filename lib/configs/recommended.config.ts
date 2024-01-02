import { getConfigCustomRules, PLUGIN_NAME } from "../utils/config";
import { ConfigName, CustomConfig } from "../utils/config.type";

export const CONFIG_NAME: ConfigName = "recommended";

export const getConfig: CustomConfig<typeof CONFIG_NAME> = (allRules) => {
  return {
    [CONFIG_NAME]: {
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      plugins: [PLUGIN_NAME],
      rules: {
        ...getConfigCustomRules(CONFIG_NAME, allRules),
        "array-callback-return": "error",
      },
    },
  };
};
