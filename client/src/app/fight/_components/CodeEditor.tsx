"use client";

import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const language = "javascript";

  return (
    <div className="h-full">
      <Editor
        options={{
          minimap: {
            enabled: false,
          },
        }}
        theme="vs-dark"
        language={language}
        // defaultValue={CODE_SNIPPETS[language]}
        // onMount={onMount}
        // value={value}
        // onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default CodeEditor;
