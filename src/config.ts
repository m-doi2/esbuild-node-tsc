import { Plugin } from "esbuild";

export type Config = Partial<{
  outDir: string;
  tsConfigFile?: string;
  esbuild: {
    entryPoints?: string[];
    minify?: boolean;
    target?: string;
    plugins?: Plugin[];
    bundle?: boolean;
  };
  assets: {
    baseDir?: string;
    filePatterns?: string[];
  } | false;
}>;

export async function readUserConfig(configPath: string): Promise<Config> {
  try {
    return require(configPath);
  } catch (err) {
    // Ignore the read error
  }
  return {};
}
