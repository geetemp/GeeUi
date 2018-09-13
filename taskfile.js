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

exports.build = function*(task) {
	yield task.parallel(["styles", "scripts"]);
};

exports.default = function*(task) {
	yield task.start("build");
	yield task.watch("src/components/**/*.less", "styles");
	yield task.watch(
		[
			"src/components/**/*.js",
			"!src/components/*/examples/*.js",
			"!src/components/**/*.spec.js"
		],
		"scripts"
	);
};

exports.release = function*(task) {
	yield task.clear("lib").start("build");
};

// module.exports = {
//   * styles(task) {
//     yield task.source("src/components/**/*.less").target("lib");
//   },
//   * scripts(task) {
//     yield task
// 		.source([
// 			"src/components/**/*.js",
// 			"!src/components/*/examples/*.js",
// 			"!src/components/**/*.spec.js"
// 		])
// 		.babel({
// 			presets: [["es2015", { loose: true, modules: false }]]
// 		})
// 		.target("lib");
//   },

//   * default(task) {

//     yield task.watch("src/components/**/*.less", "styles")
//     yield task.watch(["src/components/**/*.js",
// 			"!src/components/*/examples/*.js",
// 			"!src/components/**/*.spec.js"], "scripts")
//   }
// }
