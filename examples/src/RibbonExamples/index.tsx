import * as React from "react";
import {mergeDeep} from "typescript-object-utils";
import {Ribbon} from "../../../";

const examples = [
	{},
	{style: {background: "green"}},
	{style: {background: "blue"}},
	{style: {background: "black"}},
	{style: {color: "black", background: "#ccc"}},
	{children: "STAGE"},
];

export class RibbonExamples extends React.PureComponent<void, void> {
	public render(): JSX.Element{
		return (<div>{this.renderExamples()}</div>);
	}

	public renderExamples() {
		const cStyle: React.CSSProperties = {
			height: 200,
			width: 200,
			background: "#f5f5f5",
			margin: 5,
			overflow: "hidden",
			display: "inline-block"
		};
		return examples.map((example, i) => {
			let props = mergeDeep(example, {style: {position: "relative"}});
			return (
				<div style={cStyle} key={"example-" + i}>
					{React.createElement(Ribbon, props)}
				</div>
			);
		});
	}
}
