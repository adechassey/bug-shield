import { getConfigCustomRules, PLUGIN_NAME } from "../utils/config";
import { ConfigName, CustomConfig } from "../utils/config.type";

export const CONFIG_NAME: ConfigName = "typeorm";

export const getConfig: CustomConfig<typeof CONFIG_NAME> = (allRules) => {
  return {
    [CONFIG_NAME]: {
      extends: [],
      plugins: [PLUGIN_NAME],
      rules: {
        ...getConfigCustomRules(CONFIG_NAME, allRules),
      },
    },
  };
};
