module.exports = {
    rules: {
        "limit-named-exports": {
            create(context) {
                let namedExportCount = 0;

                return {
                    ExportNamedDeclaration(node) {
                        namedExportCount++;
                        if (namedExportCount > 1) {
                            context.report({
                                node,
                                message: "More than one named export detected. Only one named export is allowed.",
                            });
                        }
                    },
                };
            },
        },
    },
};
