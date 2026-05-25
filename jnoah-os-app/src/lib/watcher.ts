import chokidar, { type FSWatcher } from "chokidar";
import { listWatchPaths } from "./vault";

type Listener = () => void;

let watcher: FSWatcher | null = null;
const listeners = new Set<Listener>();

export function subscribeVaultChanges(cb: Listener): () => void {
  listeners.add(cb);
  ensureWatcher();
  return () => listeners.delete(cb);
}

function ensureWatcher() {
  if (watcher) return;
  watcher = chokidar.watch(listWatchPaths(), {
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
  });
  watcher.on("all", () => {
    for (const cb of listeners) cb();
  });
}
