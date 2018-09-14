import React from "react";
const AntButton = require("antd/lib/button");

export default class Button extends React.Component {
	render() {
		const props = { type: "danger", ...this.props };
		return <AntButton {...props} className="gee-button" />;
	}
}
