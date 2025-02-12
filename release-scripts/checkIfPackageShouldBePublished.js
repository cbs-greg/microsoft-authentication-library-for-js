/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const execSync = require("child_process").execSync;

function checkVersion(packageName, version) {
	return execSync(`npm view ${packageName}@${version}`).toString().trim();
}

const path = require("path");
const libPath = path.join(__dirname, '..', process.argv[2]);

const {name, version} = require(`${libPath}/package.json`);

const versionIsPublished = checkVersion(name, version);

if (versionIsPublished) {
	process.exit(0);
} else {
	process.exit(1);
}
