exports.default = function*(task) {
	yield task.parallel(["styles", "scripts"]);
};

exports.styles = function*(task) {
	yield task.source("src/components/**/*.less").target("lib");
};

exports.scripts = function*(task) {
	yield task
		.source([
			"src/components/**/*.js",
			"!src/components/*/examples/*.js",
			"!src/components/**/*.spec.js"
		])
		.babel({
			presets: [["es2015", { loose: true, modules: false }]]
		})
		.target("lib");
};
