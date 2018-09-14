import React from "react";
const AntModal = require("antd/lib/modal");

export default class Modal extends React.Component {
	render() {
		return <AntModal {...this.props} className="gee-modal" />;
	}
}
