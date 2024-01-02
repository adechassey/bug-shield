import { getConfigCustomRules, PLUGIN_NAME } from "../utils/config";
import { ConfigName, CustomConfig } from "../utils/config.type";

export const CONFIG_NAME: ConfigName = "react";

export const getConfig: CustomConfig<typeof CONFIG_NAME> = (allRules) => {
  return {
    [CONFIG_NAME]: {
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      plugins: [PLUGIN_NAME],
      rules: {
        ...getConfigCustomRules(CONFIG_NAME, allRules),
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  };
};
