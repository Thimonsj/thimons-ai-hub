import { useEffect, useRef, useState } from 'react';
import Blockly from 'blockly';
import * as python from 'blockly/python';
import { loadPyodide } from 'pyodide';
import Editor from '@monaco-editor/react';

export default function Playground() {
  const blocklyDiv = useRef(null);
  const workspace = useRef(null);
  const [code, setCode] = useState('');
  const [py, setPy] = useState(null);
  const [output, setOutput] = useState('');

  useEffect(() => {
    workspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: `
        <xml>
          <block type="controls_repeat_ext"></block>
          <block type="text"></block>
          <block type="math_number"></block>
          <block type="controls_if"></block>
        </xml>
      `
    });

    workspace.current.addChangeListener(() => {
      const pyCode = python.pythonGenerator.workspaceToCode(workspace.current);
      setCode(pyCode);
    });

    (async () => {
      const pyodide = await loadPyodide();
      setPy(pyodide);
    })();
  }, []);

  async function runPython() {
    if (!py) return;

    try {
      const result = await py.runPythonAsync(code);
      setOutput(result ? String(result) : "(no output)");
    } catch (err) {
      setOutput(String(err));
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r" ref={blocklyDiv}></div>
      <div className="w-1/2 flex flex-col">
        <Editor height="60%" defaultLanguage="python" value={code} onChange={v => setCode(v ?? '')} />
        <button className="bg-blue-600 text-white p-2" onClick={runPython}>Run</button>
        <pre className="flex-1 p-3 bg-black text-green-400 overflow-auto">{output}</pre>
      </div>
    </div>
  );
}
