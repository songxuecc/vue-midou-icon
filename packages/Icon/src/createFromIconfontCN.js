import Icon from './Icon.vue'

const customCache = new Set()

function isValidCustomScriptUrl (scriptUrl) {
  return Boolean(
    typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)
  )
}
function createScriptUrlElements (scriptUrls, index = 0) {
  const currentScriptUrl = scriptUrls[index]
  if (isValidCustomScriptUrl(currentScriptUrl)) {
    const script = document.createElement('script')
    script.setAttribute('src', currentScriptUrl)
    script.setAttribute('data-namespace', currentScriptUrl)
    if (scriptUrls.length > index + 1) {
      script.onload = () => {
        createScriptUrlElements(scriptUrls, index + 1)
      }
      script.onerror = () => {
        createScriptUrlElements(scriptUrls, index + 1)
      }
    }
    customCache.add(currentScriptUrl)
    document.body.appendChild(script)
  }
}

export default function createHhIcon (scriptUrl) {
  // DOM API 兼容
  if (
    scriptUrl &&
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function'
  ) {
    if (Array.isArray(scriptUrl)) {
      // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
      createScriptUrlElements(scriptUrl.reverse())
    } else {
      createScriptUrlElements([scriptUrl])
    }
  }

  return Icon
}
