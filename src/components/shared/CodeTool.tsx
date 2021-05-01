import * as React from 'react';
import ReactDraggable from 'react-draggable';
import './styles/codeTool.css';

type CodeBoxProps = {
  language: string;
  code: string;
  setCode: Function;
};

type CodeToolProps = {
  supportedLanguages: Array<string>;
  numberOfFunctions: Number;
  blockTypes: Array<{ name: String; amount: Number }>;
};

type FunctionProps = {
  heading: String;
  openBlocks: Number;
};

type CodeBlockProps = {
  active: Boolean;
  type: String;
  disabled: Boolean;
  amount?: Number;
  draggable: Boolean;
  onDragging?: Function;
  onDragEnd?: Function;
};

const CodeBlock = (props: CodeBlockProps) => {
  const styleName =
    props.type === 'redo' || props.type === 'undo'
      ? props.type
      : `arrow-${props.type}`;

  const onDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    if (props.draggable) return;
    console.log('Dropping');
  };

  return (
    <div
      draggable={props.draggable ? 'true' : 'false'}
      onClick={() => {
        if (props.draggable) return;
        console.log('removing current type');
      }}
      onDrop={onDrop}
      onDragLeave={(evt) => {}}
      onDragEnter={(evt) => {
        console.log('Enter');
      }}
      onDragOver={(evt) => {
        evt.preventDefault();
      }}
    >
      <div
        className={`codetool__block ${
          props.active ? 'codetool__block--active' : ''
        }`}
        onDrop={(evt) => {
          console.log(evt);
        }}
      >
        <i className={`fas fa-${styleName}`} />
        {props.amount ? (
          <span className="codetool__count">{props.amount}</span>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const CodeToolFunction = (props: FunctionProps) => {
  const [blocks, setBlocks] = React.useState(
    new Array(8).fill({ content: null })
  );

  return (
    <div className="codetool__function">
      <h4 className="codetool__heading">{props.heading}</h4>
      <div className="codetool__grid">
        {blocks.map((block, index) => (
          <CodeBlock
            type={block.content}
            active={true}
            disabled={false}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

const CodeBox = (props: CodeBoxProps) => {
  return (
    <div className="codebox">
      <header className="codebox__header">
        <h5 className="codebox__heading">{props.language}</h5>
      </header>

      <textarea
        className="codebox__code"
        onChange={(evt) => props.setCode(evt.target.value)}
        value={props.code}
      />
    </div>
  );
};

const CodeTool = (props: CodeToolProps) => {
  const [active, setActive] = React.useState(true);
  const [language, setLanguage] = React.useState(props.supportedLanguages[0]);
  const [codeView, setCodeView] = React.useState(false);
  const [code, setCode] = React.useState('');
  const [blocks, setBlocks] = React.useState([]);

  return (
    <div className="codetool">
      <ReactDraggable
        defaultPosition={{ x: 0, y: 0 }}
        handle=".codetool__container"
        bounds="parent"
        cancel=".codetool__content, .codetool__btn"
      >
        {codeView ? (
          <CodeBox code={code} setCode={setCode} language={language} />
        ) : (
          <div className="codetool__container">
            <header className="codetool__header">
              <button
                type="button"
                className="codetool__btn"
                onClick={() => setActive(!active)}
              >
                Close
              </button>

              <button
                type="button"
                className="codetool__btn"
                onClick={() => setCodeView(!codeView)}
              >
                Code
              </button>
            </header>

            <div id="codetool__content" className="codetool__content">
              <CodeToolFunction heading="Function 1" openBlocks={2} />

              <div className="codetool__grid">
                {props.blockTypes.map((block) => (
                  <CodeBlock
                    active={true}
                    type={block.name}
                    amount={block.amount}
                    disabled={false}
                    draggable={true}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </ReactDraggable>
    </div>
  );
};

export default CodeTool;
