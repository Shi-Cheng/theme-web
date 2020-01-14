import defaultSetting from './setting'
const title = defaultSetting.title || 'theme-project'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
