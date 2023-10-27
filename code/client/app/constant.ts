export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://chatgpt1.nextweb.fun/api/proxy";
export const DEFAULT_WATER_MASK = "内容由人工智能生成";
export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = ``;

export const DEFAULT_MODELS = [
  {
    name: "qwen-turbo",
    available: true,
  },
  {
    name: "qwen-plus",
    available: true,
  },
  // {
  //   name: "gpt-4-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0613",
  //   available: true,
  // },
  // {
  //   name: "qwen-turbo",
  //   available: true,
  // },
  // {
  //   name: "qwen-turbo-0301",
  //   available: true,
  // },
  // {
  //   name: "qwen-turbo-0613",
  //   available: true,
  // },
  // {
  //   name: "qwen-turbo-16k",
  //   available: true,
  // },
  // {
  //   name: "qwen-turbo-16k-0613",
  //   available: true,
  // },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;