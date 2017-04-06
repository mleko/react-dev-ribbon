import * as React from "react";
import {mergeDeep} from "typescript-object-utils";
import {DismissibleRibbon, Ribbon} from "../../../";

const examples = [
	{},
	{style: {background: "green"}},
	{style: {background: "blue"}},
	{style: {background: "black"}},
	{style: {color: "black", background: "#ccc"}},
	{children: "STAGE"},
];

export class RibbonExample extends React.PureComponent<void, State> {

	public constructor(props) {
		super(props);
		this.state = {
			text: "DEVELOPMENT",
			width: ""
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<div style={{height: 200}}>
					<label>Ribbon text:
						<input value={this.state.text} onChange={this.changeText}/>
					</label>
					<label>Ribbon width:
						<input type="number" value={this.state.width} onChange={this.changeWidth}/>
					</label>
					<DismissibleRibbon width={+this.state.width}>{this.state.text}</DismissibleRibbon>
				</div>
				<div>{this.renderExamples()}</div>
			</div>

		);
	}

	public renderExamples() {
		const cStyle = {
			height: 200,
			width: 200,
			background: "#f5f5f5",
			margin: 5,
			overflow: "hidden",
			display: "inline-block"
		};
		return examples.map((example, i) => {
			let props = mergeDeep(example, {style: {position: "relative"}});
			return (<div style={cStyle} key={"example-" + i}>
				{React.createElement(Ribbon, props)}
			</div>);
		});
	}

	private changeText = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({text: event.currentTarget.value});
	};
	private changeWidth = (event: React.FormEvent<HTMLInputElement>) => {
		this.setState({width: event.currentTarget.value});
	};
}

interface State {
	text?: string;
	width?: string;
}
