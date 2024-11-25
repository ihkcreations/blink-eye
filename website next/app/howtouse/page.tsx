import { CopyButton } from "@/components/copy-button";
import { CONFIG } from "@/configs/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Use",
};
const HowToUse = () => {
  return (
    <div className="mb-8 container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">How to Use</h2>
      <ol className="list-decimal ml-6 py-5 flex flex-col gap-8">
        <li>Clone the repository.</li>
        <pre className="hidden h-11 overflow-y-hidden items-center justify-between space-x-2 overflow-x-auto rounded border pl-6 pr-2 md:flex">
          <code className="font-mono text-sm font-semibold">
            git clone https://github.com/nomandhoni-cs/blink-eye.git
          </code>

          <CopyButton
            value={`git clone https://github.com/nomandhoni-cs/blink-eye.git`}
          />
        </pre>
        <li>Install the dependencies.</li>
        <pre className="hidden h-11 overflow-y-hidden items-center justify-between space-x-2 overflow-x-auto rounded border pl-6 pr-2 md:flex">
          <code className="font-mono text-sm font-semibold">
            pip install -r REQUIREMENTS.txt
          </code>

          <CopyButton value={`pip install -r REQUIREMENTS.txt`} />
        </pre>
        <li>Run the application.</li>
        <pre className="hidden h-11 overflow-y-hidden items-center justify-between space-x-2 overflow-x-auto rounded border pl-6 pr-2 md:flex">
          <code className="font-mono text-sm font-semibold">
            python blink_eye.py
          </code>

          <CopyButton value={`python blink_eye.py`} />
        </pre>
        <li>If you want to make .exe by yourself.</li>
        <pre className="hidden h-11 overflow-y-hidden items-center justify-between space-x-2 overflow-x-auto rounded border pl-6 pr-2 md:flex">
          <code className="font-mono text-sm font-semibold">
            {CONFIG.command}
          </code>

          <CopyButton value={CONFIG.command} />
        </pre>
      </ol>
      <h2 className="text-2xl font-bold mb-4">
        How to build the Executable File By Yourself
      </h2>
      <ol className="list-decimal ml-6 py-5 flex flex-col gap-8">
        <li>Clone the repository.</li>
        <pre className="hidden h-11 overflow-y-hidden items-center justify-between space-x-2 overflow-x-auto rounded border pl-6 pr-2 md:flex">
          <code className="font-mono text-sm font-semibold">
            git clone https://github.com/nomandhoni-cs/blink-eye.git
          </code>

          <CopyButton
            value={`git clone https://github.com/nomandhoni-cs/blink-eye.git`}
          />
        </pre>
        <li>Create and activate a virtual environment (optional)</li>
        <pre className="hidden h-11 overflow-y-hidden items-center justify-between space-x-2 overflow-x-auto rounded border pl-6 pr-2 md:flex">
          <code className="font-mono text-sm font-semibold">
            python -m venv .venv && .\.venv\Scripts\Activate.bat
          </code>

          <CopyButton
            value={`python -m venv .venv && .\.venv\Scripts\Activate.bat`}
          />
        </pre>
        <li>Run the build script:</li>
        <pre className="hidden h-11 overflow-y-hidden items-center justify-between space-x-2 overflow-x-auto rounded border pl-6 pr-2 md:flex">
          <code className="font-mono text-sm font-semibold">
            build_windows.bat
          </code>

          <CopyButton value={`build_windows.bat`} />
        </pre>
      </ol>
    </div>
  );
};

export default HowToUse;
