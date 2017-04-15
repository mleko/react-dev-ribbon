import * as React from "react";
import {Ribbon} from "../../../";
import {Playground} from "../Playground";
import {RibbonExamples} from "../RibbonExamples";

export class Examples extends React.PureComponent<void, void> {

	public render(): JSX.Element {
		return (
			<div>
				<Ribbon/>
				<Playground/>
				<RibbonExamples/>
			</div>

		);
	}
}
