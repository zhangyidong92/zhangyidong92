# 解决pnpm(ERR_INVALID_THIS)异常

在Node.js 20版本中，可能会遇到pnpm的ERR_INVALID_THIS异常。

解决方法是升级到pnpm v8.3.1或更高版本。

问题的原因是pnpm模块依赖的node-fetch库中的错误设置了this上下文。修复代码将this上下文设置为原始对象，解决了异常。如果遇到此异常，请升级到pnpm v8.3.1或更高版本。注意，Node.js 20.0.0版本存在异常断流问题，请升级到Node.js 20.1.0版本。