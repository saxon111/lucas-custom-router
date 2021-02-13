import { pathToRegexp } from "path-to-regexp";

function compilePath(path, options) {
  const keys = []; // 处理路径参数
  const regexp = pathToRegexp(path, keys, options);
  console.log(regexp)
  return { keys, regexp };
}

/**
 *
 * @param {*} pathname 浏览器当前的真实路径名
 * @param {*} [options={}] 其实就是Route组件的属性
 * path Route的路径
 * exact 是否精确匹配， 后面能不能跟子路径
 * strict 是否严格匹配 后面能不能有可选的 /
 * sensitive 是否大小写敏感
 *
 */
function matchPath(pathname, options = {}) {
  const {
    path = "/",
    exact = false,
    strict = false,
    sensitive = false,
  } = options;
  const { keys, regexp } = compilePath(path, { end: exact, strict, sensitive });
  const match = regexp.exec(pathname);
  if (!match) {
    return null;
  }
  const [url, ...values] = match;
  const isExact = pathname === url;
  // 如果要求精确但不精确
  if (exact && !isExact) {
    return null;
  }
  return {
    path, // 来自Route里的path参数
    url, // 浏览器地址的url
    isExact, // 是否精确匹配
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index];
      return memo;
    }, {}), // 路径参数
  };
}

export default matchPath;
